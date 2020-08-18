import React from "react";
import { Container, Button, Slider, Typography } from "@material-ui/core";

class Hearing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        "You are having a conversion with a friend or family member in your home. The room is dark because the curtains are partially closed and the light is off.",
        "Your friend/family member is trying to talk to you when she/he is in another room.",
        "You are at the doctor's office. The receptionist calls you from across the room to let you know that it is your turn to see the doctor.",
        "You are watching television at home. The actors speak amid the background music.",
        "You are waiting for a train/plane at a busy station. Your friend is sitting beside you and says something without looking at you.",
        "You are having a family dinner in your home. There is more than one conversation occurring at a time.",
        "You are in a restaurant with a family member or friend. You are seated in a dim and noisy spot.",
        "You are at home. The telephone rings. You do not recognize the caller's voice and cannot understand what she/he is saying.",
        "You are in the bank. You go to the teller to ask about your bank balance.",
      ],
      hearing: {},
    };
  }

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
                  <h6>Not confident at all</h6>
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
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={() => this.props.handleClick(hearing)}
            // onClick={() => console.log(this.state)}
            style={{
              backgroundColor: "black",
              width: 200,
              marginBottom: 10,
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
