import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { paymentIntent } = req.body;

            stripe.paymentIntents.retrieve(paymentIntent)
                .then(paymentIntent => {
                    console.log(paymentIntent.status);
                })
                .catch(error => {
                    console.error(error);
                });

        } catch (e) {

        }
    }
}