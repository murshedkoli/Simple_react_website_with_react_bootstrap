import React from 'react';
import './PlayerCard.css'

const PlayerCard = (props) => {
   const  {name, img, age, salary}= props.player;
   const addPlayer= props.addPlayer;
    return (
        <div className="Card-design">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <div className="age-salary"><p>Age : {age}</p> <p>Salary : {salary}</p></div>
            <button onClick={()=>addPlayer(props.player)}>Add To Your Team</button>
        </div>
    );
};

export default PlayerCard;