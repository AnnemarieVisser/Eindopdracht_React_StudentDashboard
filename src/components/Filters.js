import React from "react";

const Filters = (props) => {
  const labelStyleDifficult = props.checkedDifficult
    ? { color: "#2a9d8f" }
    : { color: "#e76f51" };
  const labelStyleFunFactor = props.checkedFunFactor
    ? { color: "#2a9d8f" }
    : { color: "#e76f51" };

  return (
    <div className="filters">
      <p>Filter difficulty or fun:</p>
      <div>
        <label style={labelStyleDifficult}>
          <input
            type="checkbox"
            checked={props.checkedDifficult}
            onChange={(event) => props.setStateDifficult(event.target.checked)}
          />
          {props.checkedDifficult
            ? "Difficulty showing"
            : "Difficulty not showing"}
        </label>
        <label style={labelStyleFunFactor}>
          <input
            type="checkbox"
            checked={props.checkedFunFactor}
            onChange={(event) => props.setStateFunFactor(event.target.checked)}
          />
          {props.checkedFunFactor
            ? "Fun showing"
            : "Fun not showing"}
        </label>
      </div>
    </div>
  );
};

export default Filters;
