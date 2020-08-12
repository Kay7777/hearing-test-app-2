import React from "react";
import { Button, Container } from "@material-ui/core";

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
        {props.round === 1 ? (
          <h1>
            You have completed the test! Click ‘SUBMIT’ to view your results
          </h1>
        ) : (
          <h1>You have completed the test! Click ‘SUBMIT’</h1>
        )}

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
          Submit
        </Button>
      </div>
    </Container>
  );
};
