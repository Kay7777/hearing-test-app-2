import React from "react";
import { Container, Button } from "@material-ui/core";

class ResultVideo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showButton: false,
      showResult: false,
    };
  }
  componentDidMount = () => {
    setTimeout(() => this.setState({ showButton: true }), 9000);
  };
  render() {
    return (
      <Container style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "right", marginTop: "5%", marginRight: "5%" }}>
          {!this.state.showResult ? 8 : 9}
        </h2>
        {!this.state.showResult ? (
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
              onClick={() => this.setState({ showResult: true })}
              style={{
                backgroundColor: "black",
                width: 150,
                marginTop: 10,
              }}
            >
              Get Results
            </Button>
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              position: "relative",
              marginTop: "2%",
            }}
          >
            <h3>
              Your test performance indicates that you may have{" "}
              <span className="text-danger">hearing loss</span>. Please view the
              short clip below for more information on what this means.
            </h3>
            <br />
            <iframe
              width="1566"
              height="758"
              src="https://www.youtube.com/embed/NpEaa2P7qZI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{ width: "80%", height: 300 }}
            ></iframe>
            <br />
            {this.state.showButton ? (
              <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={this.props.handleClick}
                style={{
                  backgroundColor: "black",
                  width: 150,
                  marginTop: 10,
                }}
              >
                Next
              </Button>
            ) : null}
          </div>
        )}
      </Container>
    );
  }
}

export default ResultVideo;
