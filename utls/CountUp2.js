import React from "react";
import CountUp from "react-countup";

const CountUpComponent2 = () => {
  return (
    <div>
      <CountUp start={0} end={1000000} duration={2.5} separator="," />
    </div>
  );
};

export default CountUpComponent2;
