import React from 'react';
import './Team.css'
import randy from '../../../resources/Randy.PNG'
import jack from '../../../resources/Jack.jpeg'

const Team = () => {
    return (
        <div className="about">
            <h2>Meet The Team</h2>
            <p>We are a dedicated team of professionals...</p>
            <div className="team-members">
                <div className="team-member">
                    <img src={randy} alt="Team Member 1" />
                    <h3>Fat Randy</h3>
                    <p>Tan Guy</p>
                </div>
                <div className="team-member">
                    <img src={jack} alt="Jack Barnes" />
                    <h3>Jack Barnes</h3>
                    <p>Marketing Director</p>
                </div>
                {/* Add more team member divs as needed */}
            </div>
        </div>
    );
};

export default Team;
