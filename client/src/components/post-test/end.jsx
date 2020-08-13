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
          Thank you for submitting your responses. You may now close your
          browser tab. Don’t forget to check your email for an important message
          from the researchers.
        </h2>
      </div>
    </Container>
  );
};
