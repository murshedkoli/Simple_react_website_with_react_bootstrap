import React from 'react';
import './Team.css';
import {ListGroup} from 'react-bootstrap';

const Team = (props) => {
    const team = props.team;

    let totalCost = 0;
    for (let i = 0; i < team.length; i++) {
        const price = team[i].salary;
        totalCost = totalCost + price;
        
    }

    return (
        <div className="team">
            <h2>You Added {team.length} Players</h2>
            <h3>Your Total Cost :{totalCost}</h3>
           

            <ListGroup>
            {team.map((player)=>
             <ListGroup.Item action ><img src={player.img} alt=""/>  {player.name} </ListGroup.Item>
             )}
            </ListGroup>

            
        </div>
    );
};

export default Team;