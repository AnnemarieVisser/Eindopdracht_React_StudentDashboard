import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <nav className="nav">
            <div>
                <ul className="home">
                    <li>
                        <Link to="/">
                            Show all students
                </Link>
                    </li>
                </ul>
                <ul className="navPerStudent">
                    <p className="notAButton">Show chart per student:</p>
                    {props.linkItemsNav}
                </ul>
                <ul className="navPerAssignment">
                    <p className="notAButton">Show score per assignment:</p>
                    <li>
                        <Link to="/score-per-assignment">
                            Score per Assignment
                </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navigation
