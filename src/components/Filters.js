import React from "react";

const Filters = (props) => {
  const labelStyleDifficult = props.checkedDifficult
    ? { color: "red" }
    : { color: "green" };
  const labelStyleFunFactor = props.checkedFunFactor
    ? { color: "red" }
    : { color: "green" };

  return (
    <div className="filter-homepage">
      <p className="expl">Use filters:</p>
      <div className="filters">
        <label className="first-label" style={labelStyleDifficult}>
          <input
            type="checkbox"
            checked={props.checkedDifficult}
            onChange={(event) => props.setStateDifficult(event.target.checked)}
          ></input>
          {props.checkedDifficult
            ? "Exclude difficulty"
            : "Include diffculty"}
        </label>
        <label style={labelStyleFunFactor}>
          <input
            type="checkbox"
            checked={props.checkedFunFactor}
            onChange={(event) => props.setStateFunFactor(event.target.checked)}
          ></input>
          {props.checkedFunFactor
            ? "Exclude fun"
            : "Include fun"}
        </label>
      </div>
    </div>
  );
};

export default Filters;
