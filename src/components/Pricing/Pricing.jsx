import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import React, { useState, useEffect } from 'react';

async function getPricing() {
    const response = await fetch('/api/v1/pricing/subscriptions', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    return await response.json();
}


async function getDiscordLoginLink(id, name, price, text_tokens, image_tokens, overdraft) {
    const response = await fetch('/api/v1/discord/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            name: name,
            price: price,
            text_tokens: text_tokens,
            image_tokens: image_tokens,
            overdraft: overdraft,
        })
    });

    return await response.json();
}


const Pricing = () => {
    const [pricingList, setPricingList] = useState([]);

    useEffect(() => {
        const fetchPricing = async () => {
            try {
                const pricingData = await getPricing();
                console.log(pricingData.data)

                if (pricingData && pricingData.data) {
                    setPricingList(pricingData.data);
                    console.log(pricingData.data)
                }
            } catch (error) {
                console.error("Error fetching pricing data:", error);
            }
        };

        fetchPricing();
    }, []);

    const handleClick = async  (id) => {
        const item = pricingList.find(item => item.id === id);
        const { url } = await getDiscordLoginLink(item.id, item.name, item.price, item.text_token, item.image_token, item.text_token_overdraft);
        window.location.href = url;
    }

    return (
        <div className="pricing-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="h2">
                            Choose your plan
                        </div>
                    </div>
                </div>
                <div className="row row-gap">
                    {
                        pricingList.map((plan) => (
                            <div className="col-lg-4" key={plan.id}>
                                <div className="pricing-item">
                                    <div className="title">
                                        <img src={plan.image} alt="icon" />
                                        {plan.name}
                                    </div>
                                    <ul>
                                        <li>{parseInt(plan.text_token).toLocaleString()} Text Tokens per month</li>
                                        <li>{parseInt(plan.image_token).toLocaleString()} Image Tokens per month</li>
                                        <li>Additional tokens ${plan.text_token_overdraft}/1k</li>
                                    </ul>

                                    <div className="price">${plan.price}/month</div>

                                    <button className="btn-lg" onClick={() => handleClick(plan.id)}>Purchase now</button>
                                </div>
                            </div>
                        ))
                    }

                    <div className="col-lg-12">
                        <div className="text-center discord-btn-p">
                            <Link href="https://t.me/myntist_portal" target="_blank" className="btn-discord">
                                Join Discord and Test <BsDiscord/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;