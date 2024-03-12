
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { id, name, price, text_tokens, image_tokens, overdraft } = req.body;

            const params = new URLSearchParams({
                client_id: process.env.DISCORD_CLIENT_ID,
                redirect_uri: process.env.DISCORD_REDIRECT_URI,
                response_type: 'code',
                scope: 'identify guilds.join',
                state: JSON.stringify(
                    {
                        id: id,
                        name: name,
                        price: price,
                        text_tokens: text_tokens,
                        image_tokens: image_tokens,
                        overdraft: overdraft,
                    }
                ),

            });

            const discordLoginUrl = `https://discord.com/api/oauth2/authorize?${params.toString()}`;

            res.json({ url: discordLoginUrl });
        } catch (error) {
            //console.error('Error in API Route:', error);
            res.status(500).json({ statusCode: 500, message: error.message })
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}