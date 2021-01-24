import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

const BarChartAssignments = (props) => {
  return (
    <div>
      <VictoryChart domainPadding={20} className="graph">
        <VictoryGroup offset={10}>
          <VictoryBar
            data={props.data}
            x="name"
            y="scoreDifficulty"
            style={{ data: { fill: "#fee440" } }}
          />
          <VictoryBar
            data={props.data}
            x="name"
            y="scoreFunFactor"
            style={{ data: { fill: "#00bbf9" } }}
          />
        </VictoryGroup>
        <VictoryAxis
          tickFormat={props.persons}
          style={{
            tickLabels: {
              fontSize: 8,
              padding: 15,
              writingMode: "vertical-rl",
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
          style={{
            tickLabels: {
              fontSize: 5,
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default BarChartAssignments;
