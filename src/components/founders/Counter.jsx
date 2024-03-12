import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = () => {
    const [countUpComponent, setCountUpComponent] = useState(null);
    const [countUpComponent2, setCountUpComponent2] = useState(null);
    const [countUpComponent3, setCountUpComponent3] = useState(null);
    const [countUpComponent4, setCountUpComponent4] = useState(null);

    const [ref, inView] = useInView();

    useEffect(() => {
        const timer = setTimeout(async () => {
        const { default: CountUpComponent } = await import(
            "../../../utlsFounders/CountUp"
        );
        setCountUpComponent(<CountUpComponent />);
        }, 10);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(async () => {
        const { default: CountUpComponent2 } = await import(
            "../../../utlsFounders/CountUp2"
        );
        setCountUpComponent2(<CountUpComponent2 />);
        }, 10);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(async () => {
        const { default: CountUpComponent3 } = await import(
            "../../../utlsFounders/CountUp3"
        );
        setCountUpComponent3(<CountUpComponent3 />);
        }, 10);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(async () => {
        const { default: CountUpComponent4 } = await import(
            "../../../utlsFounders/CountUp4"
        );
        setCountUpComponent4(<CountUpComponent4 />);
        }, 10);
        return () => clearTimeout(timer);
    }, []);

    const PromoCard = [
        {
            id: 1,
            count: countUpComponent,
            desc: "AI GENERATED ASSETS",
            inView: inView,
            ref: ref,
        },
        {
            id: 2,
            count: countUpComponent2,
            desc: "ECOSYSTEM USERS",
            inView: inView,
            ref: ref,
        },
        {
            id: 3,
            count: countUpComponent3,
            desc: "COMMUNITIES CREATED",
            inView: inView,
            ref: ref,
        },
        {
            id: 4,
            count: countUpComponent4,
            desc: "TOTAL ITEMS SOLD",
            inView: inView,
            ref: ref,
        },
    ];

    return (
        <div className="founders-counter-area">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="founders-counter">
                {PromoCard.map((record) => {
                    return (
                    <div className="founders-counter-item" key={record.id} ref={record.ref} data-aos="fade-right" data-aos-duration="1000">
                        <div className="number">
                        {record.inView ? record.count : null}
                        </div>
                        <p>{record.desc}</p>
                    </div>
                    );
                })}
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Counter;