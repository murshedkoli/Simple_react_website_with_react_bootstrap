import React from 'react';
import './PlayerCard.css';
import { Button, Card } from 'react-bootstrap';


const PlayerCard = (props) => {
    const { name, img, age, salary } = props.player;
    const addPlayer = props.addPlayer;


    return (
        <div className="Card-design">
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Age : {age}
          </Card.Text>
          <Card.Text>
            Salary : {salary}
          </Card.Text>
          <Button onClick={()=>addPlayer(props.player)} variant="primary">Add To Your Team</Button>
        </Card.Body>
      </Card>
      </div>
       
    );
};

export default PlayerCard;