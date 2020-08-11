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
        <h1>Do you agree to participate in this study?</h1>
        <Button
          color="primary"
          variant="contained"
          size="large"
          style={{
            backgroundColor: "black",
            margin: 10,
            width: "10%",
          }}
          onClick={() => props.handleClick("yes")}
        >
          Yes
        </Button>
        <Button
          color="primary"
          variant="contained"
          size="large"
          style={{
            backgroundColor: "black",
            margin: 10,
            width: "10%",
          }}
          onClick={() => props.handleClick("no")}
        >
          No
        </Button>
      </div>
    </Container>
  );
};
