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
      result: ["pass", "fail"][Math.floor(Math.random() * 2)],
    };
  }

  componentDidMount = () => {};

  saveData = async () => {
    const { result } = this.state;
    const { SNR, timer, volume, version, id } = this.props;
    // await axios.post("/api/data", {
    //   id,
    //   version,
    //   SNR,
    //   result,
    //   volume,
    //   timer,
    // });
    this.setState({ process: "end" });
  };

  renderProcess = () => {
    const { process } = this.state;
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
            handleClick={() => this.setState({ process: "submit" })}
          />
        );
      case "submit":
        return <Submit handleClick={this.saveData} />;
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
