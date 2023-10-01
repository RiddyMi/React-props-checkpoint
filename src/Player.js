import React from "react";
import "./App.css"
import Card from "react-bootstrap/Card";


const Player = ({firstName, lastName, age, imageUrl, jerseyNumber, team, nationality}) => {
    return ( 

            <Card style={{ width: '18rem' }} className="player-container">
              <Card.Img variant="top" src={imageUrl} className="player-img"/>
              <Card.Body className="player-info">
                <Card.Title>
                    <div>{firstName}</div>
                    <div>{lastName}</div>
                </Card.Title>
                <Card.Text>
                    Age: {age} <br />
                    Team: {team} <br />
                    Nationality: {nationality} <br />
                    Jersey Number: {jerseyNumber}
                </Card.Text>
              </Card.Body> 
            </Card>
          );
        };

Player.defaultProps = {
    firstName: "Unknown",
    lastName: "Unknown",
    age: "Unknown",
    team: "Unknown",
    nationality: "Unknown",
    jerseyNumber: "Unknown",
    image: "https://example.com/default-image.jpg",
}
        

export default Player;