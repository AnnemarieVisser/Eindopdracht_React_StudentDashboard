import React from "react";
import BarChart from "./BarChart";
import Filters from "./Filters";

const Home = (props) => {
  return (
    <div>
      <div>
        <h1>React Student Dashboard</h1>
        <p>Scroll in and out to view more/less datapoints.</p>
        <p className="gold">
          The golden bar shows average score for difficulty.
      </p>
        <p className="blue">
          The dark blue bar represents the average score for fun.
      </p>
      </div>
      <div>
        <BarChart
          data={props.dataAverageScore}
          assignments={props.assignments}
          checkedDifficult={props.checkedDifficult}
          checkedFunFactor={props.checkedFunFactor}
        />
      </div>
      <div>
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

export default Home;
