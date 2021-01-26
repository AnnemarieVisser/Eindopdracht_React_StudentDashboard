import React from "react";
import BarsPerAssignment from "./BarsPerAssignment";
import Legenda from "./Legenda";

const ScoresPerAssignment = (props) => {
  const sortingRadioButtons = props.assignments.map((assignment, index) => (
    <div key={index}>
      <label>
        <input
          type="radio"
          name="sort-assignments"
          value={assignment}
          onChange={(event) => props.filterAssignments(event.target.value)}
        ></input>{" "}
        {assignment}
      </label>
    </div>
  ));

  const dataAssignment = props.dataRightAssignment;

  return (
    <div>
      <div>
        <h2>Score per assignment</h2>
        <h3>
          {dataAssignment.length !== 0
            ? "Selection: " + dataAssignment[0].assignment
            : "No selection made yet"}
        </h3>
      </div>
      <div>
        <Legenda legendaTitle={"Scores for each assignment"} />
        <BarsPerAssignment
          data={props.dataRightAssignment}
          persons={props.persons}
        />
      </div>
      <div>
        {sortingRadioButtons}
      </div>
    </div>
  );
};

export default ScoresPerAssignment;
