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
        <h2>
          Make sure you're in a quiet place where you can complete the test
          without distraction!
        </h2>
        <Button
          color="primary"
          variant="contained"
          size="large"
          style={{ margin: 20, width: 200, backgroundColor: "black" }}
          onClick={props.handleClick}
        >
          OK
        </Button>
      </div>
    </Container>
  );
};
