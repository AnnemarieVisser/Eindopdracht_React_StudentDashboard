import React from "react";

const Legenda = (props) => {
  return (
    <div>
      <div>{props.legendaTitle}</div>
      <p className="gold">
        The golden bar shows the given score for difficulty.
      </p>
      <p className="blue">
        The dark blue bar represents the scored enjoyment of the module.
      </p>
    </div>
  );
};

export default Legenda;
