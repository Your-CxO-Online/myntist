import React from "react";
import CountUp from "react-countup";

const CountUpComponent4 = () => {
  return (
    <div>
      <CountUp start={0} end={10000} duration={2.5} separator="," />
    </div>
  );
};

export default CountUpComponent4;
