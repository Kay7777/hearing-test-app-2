import React from "react";
import { Container, Button, Slider, Typography } from "@material-ui/core";

class PostTestQuestions extends React.Component {
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
          <h2>
            I’m going to discuss my results on the hearing test with a
            healthcare professional
          </h2>
          <br />
          <div className="row">
            <h5 style={{ marginLeft: "14%", marginRight: 10 }}>
              Strongly disagree
            </h5>
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
            <h5 style={{ marginLeft: 10 }}>Strongly agree</h5>
          </div>
          <br />
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={() => this.props.handleClick(this.state.value)}
            style={{
              backgroundColor: this.state.value === null ? "gray" : "black",
              width: 200,
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

export default PostTestQuestions;
