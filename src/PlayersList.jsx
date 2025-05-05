// Import React and required components
import React from "react";
import Player from "./Player";
import players from "./players";
import { Container, Row, Col } from "react-bootstrap";

// PlayersList component will display all players in a responsive grid
const PlayersList = () => {
  return (
    <Container>
      <Row>
        {players.map((player, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
