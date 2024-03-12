// pages/api/stripe.js
import Stripe from 'stripe';
import axios from "axios";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { user, state } = req.body;

            const plan = JSON.parse(state);


            let product = await stripe.products.create({
                name: plan.name,
                description: `${plan.text_tokens} text tokens, ${plan.image_tokens} image tokens per month, Additional tokens $${plan.overdraft}/1k`,
            });


            let prices = await stripe.prices.create({
                currency: 'usd',
                unit_amount: parseInt(plan.price)*100,
                product: product.id,
            });


            let lineItems = [
                {
                    price: prices.id,
                    quantity: 1,
                    adjustable_quantity: {enabled: false},
                }
            ];

            const paymentLink = await stripe.paymentLinks.create({
                line_items: lineItems,
                after_completion: {
                    type: 'redirect',
                    redirect: {
                        url: `${process.env.WEB_URL}/payment/success?id=${user.id}`,
                    },
                },

                payment_intent_data: {
                    metadata: {
                        id: user.id,
                        user: JSON.stringify(user),
                        plan: JSON.stringify(plan),
                    },
                },

                invoice_creation: {enabled: true},
            });

            await axios.post(
                `${process.env.MYNTIST_API_URL}/users`,
                {
                    discord_id: user.id,
                    subscription_id: 1
                },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.MYNTIST_API_KEY}`,
                    },
                }
            ).then().catch(console.error);


            res.json({ url: paymentLink.url });
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
};
