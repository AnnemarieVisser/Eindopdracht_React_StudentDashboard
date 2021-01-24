import React from "react";
import BarChart from "./BarChart";
import Filters from "../components/Filters";
import Legend from "../components/Legend";

const Studentpage = (props) => {
  const profiles = props.studentProfiles;
  const rightProfile = profiles.filter(
    (profile) => profile.key === props.person
  );

  return (
    <div>
      <div>
        <h1>{props.person}</h1>
      </div>
      <div>
        <Legend legendTitle={"Scores for each assignment"} />
        <BarChart
          data={props.getDataRightStudent(props.person)}
          assignments={props.assignments}
          checkedDifficult={props.checkedDifficult}
          checkedFunFactor={props.checkedFunFactor}
        />
      </div>
      <div>
        {rightProfile}
        <Filters
          checkedDifficult={props.checkedDifficult}
          setStateDifficult={props.setStateDifficult}
          checkedFunFactor={props.checkedFunFactor}
          setStateFunFactor={props.setStateFunFactor}
        />
      </div>
    </div>
  );
};

export default Studentpage;
