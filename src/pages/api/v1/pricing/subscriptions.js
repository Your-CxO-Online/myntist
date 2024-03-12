import axios from 'axios';


export default async function handler(req, res) {
    if (req.method === 'GET') {
        await axios.get(
            `${process.env.MYNTIST_API_URL}/subscriptions`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.MYNTIST_API_KEY}`,
                },
            }
        ).then((response) => {
            console.log(response.data)
            res.status(200).json(response.data)
        }).catch((error) => {
            res.status(500).json({ statusCode: 500, message: error.message })
        });
    } else {
        res.setHeader('Allow', 'GET');
        res.status(405).end('Method Not Allowed');
    }
};
