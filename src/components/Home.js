import React from "react";
import BarChart from "./BarChart";

const Home = (props) => {
  return (
    <div>
      <div>
        <h1>React Student Dashboard</h1>
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

    </div>
  );
};

export default Home;
