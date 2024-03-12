import React from "react";
import CountUp from "react-countup";

const CountUpComponent = () => {
  return (
    <div>
      <CountUp start={0} end={10000} duration={2.5} separator="," />
    </div>
  );
};

export default CountUpComponent;
