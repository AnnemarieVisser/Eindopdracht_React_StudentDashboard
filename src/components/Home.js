import React from "react";
import BarChart from "./BarChart";

const Home = (props) => {
  return (
    <div>
      <div>
        <h1>React Student Dashboard</h1>
        
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
