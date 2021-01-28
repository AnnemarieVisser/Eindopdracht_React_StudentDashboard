import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import data from "../../data/data";

import Home from "../Home";
import Navigation from "../Navigation";
import Studentpage from "../StudentPage";
import ScoresPerAssignment from "../ScoresPerAssignment";
import studentProfiles from "../../data/dataStudentProfiles";

const App = () => {
  const [state] = useState(data);
  const [rightAssignment, setStateRightAssignment] = useState([]);
  const [checkedDifficult, setStateCheckedDifficult] = useState(true);
  const [checkedFunFactor, setStateCheckedFunFactor] = useState(true);

  const stateData = state.map((item) => ({
    name: item.name,
    assignment: item.assignment,
    scoreDifficulty: parseInt(item.scoreDifficulty),
    scoreFunFactor: parseInt(item.scoreFunFactor),
  }));

  const getDataRightStudent = (student) => {
    return stateData.filter((item) => item.name === student);
  };

  const getDataRightAssignment = (assignment) => {
    const rightAssignment = stateData.filter(
      (item) => item.assignment === assignment
    );
    setStateRightAssignment(rightAssignment);
  };

  const allPersons = state.map((data) => data.name);
  const allUniquePersons = [...new Set(allPersons)];
  const allAssignments = state.map((data) => data.assignment);
  const allUniqueAssignments = [...new Set(allAssignments)];

  const studentProfileInformation = studentProfiles.map((student, key) => (
    <div key={allUniquePersons[key]}>
      <img src={`${student.photo}`} alt="Student" />
      <p>
        {allUniquePersons[key]} {student.lastName}
      </p>
      <div>
        <p>{student.age} years old</p>
        <p>{student.phoneNumber}</p>
        <p>{student.email}</p>
      </div>
    </div>
  ));

  const linkItemsNav = allUniquePersons.map((person) => (
    <li key={person} >
      <Link to={`/${person}`}>{person}</Link>
    </li>
  ));

  const routeItemsNav = allUniquePersons.map((person) => (
    <Route path={`/${person}`} key={person}>
      <Studentpage
        person={person}
        getDataRightStudent={getDataRightStudent}
        assignments={allUniqueAssignments}
        studentProfiles={studentProfileInformation}
        checkedDifficult={checkedDifficult}
        setStateDifficult={setStateCheckedDifficult}
        checkedFunFactor={checkedFunFactor}
        setStateFunFactor={setStateCheckedFunFactor}
      />
    </Route>
  ));

  const getAverageScores = (assignment, typeOfScore) => {
    const filteredData = stateData
      .filter((item) => item.assignment === assignment)
      .map((score) => score[typeOfScore]);
    const averageScore =
      filteredData.reduce((a, b) => a + b) / filteredData.length;
    return averageScore;
  };

  const dataWithAverageScores = allUniqueAssignments.map((assignment) => ({
    assignment: assignment,
    scoreDifficulty: getAverageScores(assignment, "scoreDifficulty"),
    scoreFunFactor: getAverageScores(assignment, "scoreFunFactor"),
  }));

  return (
    <Router>
      <div className="container">
        <Navigation
          linkItemsNav={linkItemsNav}
        />
        <main className="main">
          <Switch>
            {routeItemsNav}
            <Route path="/score-per-assignment">
              <ScoresPerAssignment
                filterAssignments={getDataRightAssignment}
                dataRightAssignment={rightAssignment}
                assignments={allUniqueAssignments}
                persons={allUniquePersons}
              />
            </Route>
            <Route path="/">
              <Home
                dataAverageScore={dataWithAverageScores}
                filterAssignments={getDataRightAssignment}
                dataRightAssignment={rightAssignment}
                assignments={allUniqueAssignments}
                persons={allUniquePersons}
                checkedDifficult={checkedDifficult}
                setStateDifficult={setStateCheckedDifficult}
                checkedFunFactor={checkedFunFactor}
                setStateFunFactor={setStateCheckedFunFactor}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
