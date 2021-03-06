import React from "react";
import BarChart from "./BarChart";
import Filters from "./Filters";
import Legenda from "./Legenda";

const Studentpage = (props) => {
  const profiles = props.studentProfiles;
  const profileOfPerson = profiles.filter(
    (profile) => profile.key === props.person
  );

  return (
    <div>
      <div>
        <h1>{props.person}</h1>
      </div>
      <div>
        <Legenda legendaTitle={"Scores given for each assignment. Scroll to zoom."} />
        <BarChart
          data={props.getDataRightStudent(props.person)}
          assignments={props.assignments}
          checkedDifficult={props.checkedDifficult}
          checkedFunFactor={props.checkedFunFactor}
        />
      </div>
      <div class="studentPage">
        <Filters
          checkedDifficult={props.checkedDifficult}
          setStateDifficult={props.setStateDifficult}
          checkedFunFactor={props.checkedFunFactor}
          setStateFunFactor={props.setStateFunFactor}
        />
        {profileOfPerson}
      </div>
    </div>
  );
};

export default Studentpage;
