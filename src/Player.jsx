import React from "react";
import { Card } from "react-bootstrap";

const cardStyle = {
  width: '18rem',
  margin: '1rem',
  border: '1px solid #ddd',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
};

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey #:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown",
  team: "Free Agent",
  nationality: "N/A",
  jerseyNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/150"
};

export default Player;
