import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryZoomContainer,
  VictoryTooltip,
} from "victory";

const BarChart = (props) => {
  const data = props.data;
  const createDataWithLabelsDifficulty = data.map((item) => ({
    assignment: item.assignment,
    scoreDifficulty: item.scoreDifficulty,
    label: `Assignment ${item.assignment}, Score Difficulty: ${item.scoreDifficulty}`,
  }));

  const createDataWithLabelsFunFactor = data.map((item) => ({
    assignment: item.assignment,
    scoreFunFactor: item.scoreFunFactor,
    label: `Assignment ${item.assignment}, Score Fun: ${item.scoreFunFactor}`,
  }));

  const barStyleDifficult = props.checkedDifficult
    ? { data: { fill: "#C2831C" }, labels: { fontSize: 8 } }
    : { data: { fillOpacity: 0 }, labels: { fontSize: 8 } };

  const barStyleFun = props.checkedFunFactor
    ? { data: { fill: "#14213D" }, labels: { fontSize: 8 } }
    : { data: { fillOpacity: 0 }, labels: { fontSize: 8 } };

  return (
    <div class="barChart">
      <VictoryChart
        domainPadding={10}
        containerComponent={
          <VictoryZoomContainer
            zoomDimension="x"
          />
        }
      >
        <VictoryGroup offset={3}>
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={createDataWithLabelsDifficulty}
            x="assignment"
            y="scoreDifficulty"
            style={barStyleDifficult}
          />
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={createDataWithLabelsFunFactor}
            x="assignment"
            y="scoreFunFactor"
            style={barStyleFun}
          />
        </VictoryGroup>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.assignment}
          style={{
            tickLabels: {
              textAnchor: 'start',
              fontSize: 6,
              padding: 0,
              writingMode: "vertical-lr",
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
          standalone={false}
          style={{
            tickLabels: {
              fontSize: 10,
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default BarChart;
