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
        <div
          style={{
            textAlign: "center",
            position: "relative",
            marginTop: "20%",
          }}
        >
          <h1>I am concerned about my hearing</h1>
          <Slider
            valueLabelDisplay="auto"
            defaultValue={this.state.value}
            onChange={(value) =>
              this.setState({ value: value.target.ariaValueNow })
            }
            style={{ width: "40%" }}
            marks
            min={0}
            max={100}
          />
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={() => this.props.handleClick(this.state.value)}
            style={{
              backgroundColor: this.state.value === null ? "gray" : "black",
              width: 150,
              marginLeft: 10,
            }}
            disabled={this.state.value === null}
          >
            {this.state.value ? `${this.state.value} OK?` : "re-select"}
          </Button>
        </div>
      </Container>
    );
  }
}

export default Hearing;
