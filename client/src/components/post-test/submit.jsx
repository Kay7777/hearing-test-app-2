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
        <h2>
          You have completed the study. Thank you for your participation. Click
          ‘SUBMIT’ to send your responses to the researchers. Remember to check
          your email afterwards for a message from the researchers containing
          further information about this study.{" "}
        </h2>
        <br />
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={props.handleClick}
          style={{
            backgroundColor: "black",
            width: 150,
            height: 70,
            marginTop: 30,
          }}
        >
          Submit
        </Button>
      </div>
    </Container>
  );
};
