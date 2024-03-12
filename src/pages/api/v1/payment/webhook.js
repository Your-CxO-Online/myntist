import { buffer } from 'micro';
import Stripe from 'stripe';
import axios from "axios";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
    api: {
        bodyParser: false,
    },
};

async function getUser(user_id, subscription_id) {
    return await new Promise(async (resolve) => {
        await axios.get(
            `${process.env.MYNTIST_API_URL}/users/discord/${user_id}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.MYNTIST_API_KEY}`,
                }
            }
        ).then((res) => {
            resolve(res.data.user.id);
        }).catch(async (err) => {
            const response = await axios.post(
                `${process.env.MYNTIST_API_URL}/users`,
                {
                    discord_id: user_id,
                    subscription_id: subscription_id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.MYNTIST_API_KEY}`,
                    },
                }
            ).then().catch(console.error);
            resolve(response.data.user_id);
        });
    });
}

async function createRecord(user_id, subscription_id, payment_id) {
    console.log(user_id, subscription_id, payment_id)
    return await new Promise(async (resolve) => {
        await axios.post(
            `${process.env.MYNTIST_API_URL}/payment/record`,
            {
                "user_id": user_id,
                "subscription_id": subscription_id,
                "payment_id": payment_id,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.MYNTIST_API_KEY}`,
                }
            }
        ).then().catch(console.error);

        resolve();
    });
}

async function getRecord(payment_id) {
    return await new Promise(async (resolve) => {
        await axios.get(
            `${process.env.MYNTIST_API_URL}/payment/check/${payment_id}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.MYNTIST_API_KEY}`,
                }
            }
        ).then((res) => {
            resolve(res.data.payment);
        }).catch((err) => {
            resolve(null);
        });
    });
}

async function updateRecord(payment_id, status) {
    return await new Promise(async (resolve) => {
        await axios.put(
            `${process.env.MYNTIST_API_URL}/payment/update`,
            {
                "payment_id": payment_id,
                "status": status,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.MYNTIST_API_KEY}`,
                }
            }
        ).then().catch(console.error);

        resolve(true);
    });
}

async function getUserId(user_id) {
    return await new Promise(async (resolve) => {
        const User = await axios.get(
            `${process.env.MYNTIST_API_URL}/users/discord/${user_id}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.MYNTIST_API_KEY}`,
                }
            }
        );

        resolve(User.data.user.id);
    });
}

async function createUser(user_id) {
    return await new Promise(async (resolve) => {
        const User = await axios.post(
            `${process.env.MYNTIST_API_URL}/users`,
            {
                discord_id: user_id,
                subscription_id: 1
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.MYNTIST_API_KEY}`,
                },
            }
        );

        resolve(User.data.user.id);
    });
}

async function assignSubscription(user_id, subscription_id) {
    return await new Promise(async (resolve) => {
        await axios.post(
            `${process.env.MYNTIST_API_URL}/subscription/assign`,
            {
                user_id: user_id,
                subscription_id: subscription_id,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.MYNTIST_API_KEY}`,
                }
            }
        ).then().catch(console.error);

        resolve();
    });
}

async function GETUSERID(discord_id, subscription_id) {
    return await new Promise(async (resolve) => {
        const User = await axios.get(
            `${process.env.MYNTIST_API_URL}/users/discord/${discord_id}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.MYNTIST_API_KEY}`,
                }
            }
        ).then((res) => {
            resolve(res.data.user.id);
        }).catch(async (err) => {
            if (err.response.status === 404 && err.response.data.message === "User not found") {
                const response = await axios.post(
                    `${process.env.MYNTIST_API_URL}/users`,
                    {
                        discord_id: discord_id,
                        subscription_id: subscription_id
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.MYNTIST_API_KEY}`,
                        },
                    }
                ).then().catch(console.error);
                resolve(response.data.user_id);
            } else {
                console.log(err);
                resolve(null);
            }
        });

    });
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const buf = await buffer(req);
        const sig = req.headers['stripe-signature'];

        let event;
        if (process.env.STRIPE_WEBHOOK_SECRET_KEY) {
            try {
                event = stripe.webhooks.constructEvent(buf.toString(), sig, process.env.STRIPE_WEBHOOK_SECRET_KEY);
            } catch (err) {
                console.log(`⚠️  Webhook signature verification failed.`, err.message);
                return res.status(400).send(`Webhook Error: ${err.message}`);
            }
        } else {
            return res.status(400).send(`Webhook Error: Missing Stripe Webhook Secret`);
        }

        let user, plan, user_id = null;

        switch (event.type) {
            case 'payment_intent.canceled':
                const paymentIntentCanceled = event.data.object;

                user = JSON.parse(paymentIntentCanceled.metadata.user);
                plan = JSON.parse(paymentIntentCanceled.metadata.plan);

                user_id = await GETUSERID(user.id, plan.id);

                await updateRecord(paymentIntentCanceled.id, 'failed');
                break;
            case 'payment_intent.created':
                const paymentIntentCreated = event.data.object;

                user = JSON.parse(paymentIntentCreated.metadata.user);
                plan = JSON.parse(paymentIntentCreated.metadata.plan);

                user_id = await GETUSERID(user.id, plan.id);

                await createRecord(user_id, plan.id, paymentIntentCreated.id);
                break;
            case 'payment_intent.payment_failed':
                const paymentIntentPaymentFailed = event.data.object;
                user = JSON.parse(paymentIntentPaymentFailed.metadata.user);
                plan = JSON.parse(paymentIntentPaymentFailed.metadata.plan);

                user_id = await GETUSERID(user.id, plan.id);

                await updateRecord(paymentIntentPaymentFailed.id, 'failed');
                break;
            case 'payment_intent.succeeded':
                const paymentIntentSucceeded = event.data.object;

                user = JSON.parse(paymentIntentSucceeded.metadata.user);
                plan = JSON.parse(paymentIntentSucceeded.metadata.plan);

                console.log(user, plan)

                user_id = await GETUSERID(user.id, plan.id);

                await assignSubscription(user_id, plan.id);
                await updateRecord(paymentIntentSucceeded.id, 'success');

                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        res.status(200).send('Event received');
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
