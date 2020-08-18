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
        <h2 style={{ textAlign: "right", marginTop: "5%", marginRight: "5%" }}>
          10
        </h2>
        <div
          style={{
            textAlign: "center",
            position: "relative",
            marginTop: "15%",
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
              valueLabelDisplay="on"
              defaultValue={this.state.value}
              onChange={(e) => {
                e.target.addEventListener("click", (v) => {
                  this.setState({ value: v.target.innerText });
                });
              }}
              style={{ width: "40%" }}
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

export default PostTestQuestions;
