import React from "react";
import { Container, Button } from "@material-ui/core";
import CountDown from "../../assets/count-down";

class ResultVideo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showButton: false,
      process: "show-result-button",
    };
  }

  handleGetResult = () => {
    this.setState({ process: "count-down" });
    setTimeout(() => {
      this.setState({ process: "result-video" });
    }, 3000);
    setTimeout(() => this.setState({ showButton: true }), 52000);
  };

  renderResult = () => {
    const { process } = this.state;
    switch (process) {
      case "show-result-button":
        return (
          <div
            style={{
              textAlign: "center",
              position: "relative",
              marginTop: "15%",
            }}
          >
            <h2>
              You have completed the tests. Click the button below to get your
              results.
            </h2>
            <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={this.handleGetResult}
              style={{
                backgroundColor: "black",
                width: 150,
                marginTop: 10,
              }}
            >
              Get Results
            </Button>
          </div>
        );
      case "count-down":
        return (
          <div
            style={{
              textAlign: "center",
              position: "relative",
              marginTop: "10%",
            }}
          >
            <CountDown />
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    const { process } = this.state;
    return (
      <Container style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "right", marginTop: "5%", marginRight: "5%" }}>
          {!this.state.showResult ? 8 : 9}
        </h2>
        {this.renderResult()}
        {process === "result-video" ? (
          <div
            style={{
              textAlign: "center",
              position: "relative",
              marginTop: "2%",
            }}
          >
            <h3>
              Your test performance indicates that you may have
              <span className="text-danger">hearing loss</span>. Please view the
              short clip below for more information on what this means.
            </h3>
            <br />
            <video
              width="80%"
              autoPlay={true}
              controls={false}
              src="https://literacyapp.s3.ca-central-1.amazonaws.com/videos/result-video.mp4"
            >
              <h3>This browser does not support the video element.</h3>
            </video>
            <br />
            {this.state.showButton ? (
              <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={this.props.handleClick}
                style={{
                  backgroundColor: "black",
                  width: 200,
                  height: 50,
                  marginTop: 10,
                }}
              >
                Next
              </Button>
            ) : null}
          </div>
        ) : null}
      </Container>
    );
  }
}

export default ResultVideo;
