import React from "react";
import { Container, Button, TextField } from "@material-ui/core";

class Id extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }

  render() {
    return (
      <Container>
        <div
          style={{
            textAlign: "center",
            position: "relative",
            marginTop: "20%",
          }}
        >
          <h2>Please enter the Study ID # you see at the top of the screen</h2>
          <h3>Once you have entered the number, please click "Submit"</h3>
          <TextField
            value={this.state.id}
            onChange={(e) => this.setState({ id: e.target.value })}
          />
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={() => this.props.handleClick(this.state.id)}
            style={{
              backgroundColor: "black",
              marginLeft: 10,
            }}
          >
            Submit
          </Button>
        </div>
      </Container>
    );
  }
}

export default Id;
