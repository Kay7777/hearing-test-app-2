import React from "react";
import { Container, Button, Slider, Typography } from "@material-ui/core";

class Hearing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    };
  }

  render() {
    console.log("value is ", this.state.value);
    return (
      <Container>
        <h2 style={{ textAlign: "right", marginTop: "5%", marginRight: "5%" }}>
          3
        </h2>
        <div
          style={{
            textAlign: "center",
            position: "relative",
            marginTop: "15%",
          }}
        >
          <h1>I am concerned about my hearing</h1>
          <br />

          <Slider
            valueLabelDisplay="on"
            defaultValue={50}
            aria-labelledby="discrete-slider-always"
            onChange={(e) => {
              e.target.addEventListener("click", (v) => {
                this.setState({ value: v.target.innerText });
              });
            }}
            style={{ width: "40%" }}
            min={0}
            max={100}
          />

          <br />
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={() => this.props.handleClick(this.state.value)}
            style={{
              backgroundColor: "black",
              width: 200,
            }}
            disabled={this.state.value === null}
          >
            OK
          </Button>
        </div>
      </Container>
    );
  }
}

export default Hearing;
