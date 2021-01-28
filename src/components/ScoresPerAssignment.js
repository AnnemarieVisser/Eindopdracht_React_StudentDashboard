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
        />
        {assignment}
      </label>
    </div>
  ));

  const dataAssignment = props.dataRightAssignment;

  return (
    <div>
      <div>
        <h1>Score per assignment</h1>
        <h2>
          {dataAssignment.length !== 0
            ? "Selection: " + dataAssignment[0].assignment
            : "Please select an assignment below"}
        </h2>
      </div>
      <div>
        <Legenda legendaTitle={"Scores per assignment per student"} />
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
