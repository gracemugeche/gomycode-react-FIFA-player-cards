// Import React and Bootstrap Card component
import React from "react";
import { Card } from "react-bootstrap";


// Inline styles for the player card
const cardStyle = {
  width: '18rem',
  margin: '1rem',
  border: '1px solid #ddd',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
};

// The Player component receives player details via props
const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
        // Bootstrap Card with custom styling
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

// Default values in case props are not provided
Player.defaultProps = {
  name: "Unknown",
  team: "Free Agent",
  nationality: "N/A",
  jerseyNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/150"
};


// Export the Player component for use in other files
export default Player;
