import React from "react";

const Legenda = (props) => {
  return (
    <div>
      <div>{props.legendTitle}</div>
      <p className="gold">
        The golden bar shows the given score for difficulty.
      </p>
      <p className="blue">
        The dark blue bar represents the scored fun.
      </p>
    </div>
  );
};

export default Legenda;
