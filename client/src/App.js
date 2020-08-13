import React from "react";
import Start from "./pages/start";
import Test from "./pages/test";
import PostTest from "./pages/post-test.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      process: "start",
      id: null,
      version: null,
      volume: null,
      round: null,
      result: null,
      SNR: null,
      timer: null,
    };
  }

  handleStartNext = () => {
    this.setState({ process: "test" });
  };

  handleTestNext = (id, version, volume, round, result, SNR, timer) => {
    this.setState({
      process: "post-test",
      id,
      version,
      volume,
      round,
      result,
      SNR,
      timer,
    });
  };

  renderProcess = () => {
    const {
      process,
      id,
      version,
      volume,
      round,
      result,
      SNR,
      timer,
    } = this.state;
    switch (process) {
      case "start":
        return <Start handleNext={this.handleStartNext} />;
      case "test":
        return <Test handleNext={this.handleTestNext} />;
      case "post-test":
        return (
          <PostTest
            id={id}
            version={version}
            volume={volume}
            round={round}
            result={result}
            SNR={SNR}
            timer={timer}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return this.renderProcess();
  }
}
export default App;
