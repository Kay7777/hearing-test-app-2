import React from "react";
import { Container, Button, Slider } from "@material-ui/core";
import axios from "axios";

class Hearing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      hearing: {},
    };
  }

  componentDidMount = async () => {
    const doc = await axios.get("/api/page3/questions");
    const questions = doc.data.map((data) => data.question);
    this.setState({ questions });
  };

  validateHearing = () => {
    const { questions, hearing } = this.state;
    if (Object.keys(hearing).length !== questions.length) return false;
    for (const key in hearing) {
      if (Object.keys(hearing[key]).length !== 2) return false;
    }
    return true;
  };

  renderButton = () => {
    const { questions, hearing } = this.state;
    // console.log(Object.keys(hearing).length, questions.length);
    if (questions.length === 0) {
      return null;
    } else if (this.validateHearing()) {
      return (
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => this.props.handleClick(hearing)}
          style={{
            backgroundColor: "black",
            width: 200,
            marginBottom: 10,
          }}
          disabled={this.state.value === null}
        >
          OK
        </Button>
      );
    } else {
      return <h3>Please answer all questions.</h3>;
    }
  };

  render() {
    const { hearing, questions } = this.state;
    return (
      <Container>
        <h2 style={{ textAlign: "right", marginTop: "5%", marginRight: "5%" }}>
          3
        </h2>
        <div
          style={{
            position: "relative",
            marginTop: "3%",
            marginBottom: "5%",
            marginLeft: "10%",
            marginRight: "10%",
          }}
        >
          <hr />
          {questions.map((question, index) => {
            return (
              <div style={{ marginTop: 10 }}>
                <h4>{question}</h4>
                <h5>How well you hear in this situation?</h5>
                <div className="row" style={{ marginLeft: 20 }}>
                  <h6>Not well at all</h6>
                  <Slider
                    valueLabelDisplay="auto"
                    defaultValue={50}
                    aria-labelledby="discrete-slider-always"
                    onChange={(e) => {
                      e.target.addEventListener("click", (v) => {
                        this.setState(() => {
                          if (hearing[questions[index]]) {
                            const obj = hearing[questions[index]];
                            obj["wellness"] = v.target.innerText;
                          } else {
                            hearing[questions[index]] = {
                              wellness: v.target.innerText,
                            };
                          }
                          return { hearing };
                        });
                      });
                    }}
                    style={{ width: "40%", margin: 10 }}
                    min={0}
                    max={100}
                  />
                  <h6>Very well</h6>
                </div>
                <h5>
                  How confident are you that you can manage this situation?
                </h5>
                <div className="row" style={{ marginLeft: 20 }}>
                  <h6>Not confident</h6>
                  <Slider
                    valueLabelDisplay="auto"
                    defaultValue={50}
                    aria-labelledby="discrete-slider-always"
                    onChange={(e) => {
                      e.target.addEventListener("click", (v) => {
                        this.setState(() => {
                          if (hearing[questions[index]]) {
                            const obj = hearing[questions[index]];
                            obj["confidence"] = v.target.innerText;
                          } else {
                            hearing[questions[index]] = {
                              confidence: v.target.innerText,
                            };
                          }
                          return { hearing };
                        });
                      });
                    }}
                    style={{ width: "40%", margin: 10 }}
                    min={0}
                    max={100}
                  />
                  <h6>Very confident</h6>
                </div>
                <hr />
              </div>
            );
          })}
          <br />
          {this.renderButton()}
        </div>
      </Container>
    );
  }
}

export default Hearing;
