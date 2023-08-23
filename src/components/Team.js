import React from 'react';
import './Team.css'

const Team = () => {
    return (
        <div className="about">
            <h2>Meet The Team</h2>
            <p>We are a dedicated team of professionals...</p>
            <div className="team-members">
                <div className="team-member">
                    <img src="team-member1.jpg" alt="Team Member 1" />
                    <h3>John Doe</h3>
                    <p>Co-founder & CEO</p>
                </div>
                <div className="team-member">
                    <img src="team-member2.jpg" alt="Team Member 2" />
                    <h3>Jane Smith</h3>
                    <p>Marketing Director</p>
                </div>
                {/* Add more team member divs as needed */}
            </div>
        </div>
    );
};

export default Team;
