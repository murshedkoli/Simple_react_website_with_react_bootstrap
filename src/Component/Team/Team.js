import React from 'react';
import './Team.css'

const Team = (props) => {
    const team = props.team;

    let totalCost = 0;
    for (let i = 0; i < team.length; i++) {
        const price = team[i].salary;
        totalCost = totalCost + price;
        
    }

    return (
        <div>
            <h2>You Added {team.length} Players</h2>
            <h3>Your Total Cost :{totalCost}</h3>
            <ol>
                {team.map((player)=><li> <img src={player.img} alt=""/>   {player.name}</li>)}
            </ol>
        </div>
    );
};

export default Team;