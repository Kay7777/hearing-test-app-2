import React from "react";
import Submit from "../components/post-test/submit";
import ResultVideo from "../components/post-test/result-video";
import PostTestQuestions from "../components/post-test/post-test-questions";
import End from "../components/post-test/end";
import axios from "axios";

class PostTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      process: "result",
    };
  }

  componentDidMount = () => {};

  saveData = async () => {
    console.log("Data saved from frontend", this.state);
    const { SNR, result, timer, round, volume, version, id } = this.props;
    if (round === 1) {
      await axios.post("/api/data", {
        id,
        version,
        SNR1: SNR,
        result,
        volume,
        timer1: timer,
        round,
      });
    } else {
      await axios.post("/api/data", {
        id,
        SNR2: SNR,
        timer2: timer,
        round,
      });
    }
    this.setState({ process: "end" });
  };

  renderProcess = () => {
    const { process } = this.state;
    const { round, result } = this.props;
    switch (process) {
      case "result":
        return (
          <ResultVideo
            handleClick={() =>
              this.setState({ process: "post-test-questions" })
            }
          />
        );
      case "post-test-questions":
        return (
          <PostTestQuestions
            handleClick={this.setState({ process: "submit" })}
          />
        );
      case "submit":
        return <Submit handleClick={this.saveData} round={round} />;
      case "end":
        return <End />;
      default:
        return null;
    }
  };

  render() {
    return this.renderProcess();
  }
}

export default PostTest;
