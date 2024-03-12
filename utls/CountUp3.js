import React from "react";
import CountUp from "react-countup";

const CountUpComponent3 = () => {
  return (
    <div>
      <CountUp start={0} end={1000} duration={2.5} separator="," />
    </div>
  );
};

export default CountUpComponent3;
