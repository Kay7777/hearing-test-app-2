import React from "react";
import { Container, Button } from "@material-ui/core";

export default (props) => {
  return (
    <Container>
      <div
        style={{
          textAlign: "center",
          position: "relative",
          marginTop: "20%",
        }}
      >
        <h1>Click the ‘START’ button to begin the hearing test</h1>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={props.handleClick}
          style={{
            backgroundColor: "black",
            borderRadius: "100%",
            height: 80,
            width: 80,
          }}
        >
          Start
        </Button>
      </div>
    </Container>
  );
};
