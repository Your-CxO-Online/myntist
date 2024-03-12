import axios from "axios";

import dotenv from 'dotenv';
dotenv.config(
    {
        path: __dirname + '/.env'
    }
);

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { code, state } = req.query;

            const response = await axios.post('https://discord.com/api/v8/oauth2/token', new URLSearchParams({
                client_id: process.env.DISCORD_CLIENT_ID,
                client_secret: process.env.DISCORD_CLIENT_SECRET,
                code,
                grant_type: 'authorization_code',
                redirect_uri: process.env.DISCORD_REDIRECT_URI,
                scope: 'identify',
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            const user = await axios.get('https://discord.com/api/users/@me', {
                headers: {
                    Authorization: `Bearer ${response.data.access_token}`,
                },
            });

            const stripeResponse = await axios.post(
                `${process.env.WEB_URL}/api/v1/payment/stripe`,
            {
                    user: user.data,
                    state: state
                }
            );

            res.redirect(stripeResponse.data.url);
        } catch (err) {
            res.status(500).json({ message: 'An error occurred while trying to authenticate with Discord' });
        }
    } else {
        res.setHeader('Allow', 'GET');
        res.status(405).end('Method Not Allowed');
    }
}