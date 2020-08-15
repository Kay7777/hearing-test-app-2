import React from "react";
import Id from "../components/test/id";
import VolumeAdjustment from "../components/test/adjustment";
import SpeechInNoise from "../components/test/speech-in-noise";
import TestDemo from "../components/test/test-demo";
import Environment from "../components/test/environment";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      process: "environment",
      version: 1, // need to do 3 version here
      volume: 10, // starts at 10/1000
      SNR: null,
      id: null,
    };
  }

  handleIdClick = (id) => {
    const index = Number(id) % 3;
    this.setState({ process: "environment", id, version: index + 1 });
  };

  handleTestingClick = (SNR, timer) => {
    const { id, version, volume } = this.state;
    this.props.handleNext(id, version, volume, SNR, timer);
  };

  renderProcess = () => {
    const { process, volume } = this.state;
    switch (process) {
      case "id":
        return <Id handleClick={this.handleIdClick} />;
      case "environment":
        return (
          <Environment
            handleClick={() => this.setState({ process: "adjustment" })}
          />
        );
      case "adjustment":
        return (
          <VolumeAdjustment
            handleVolume={(volume) => this.setState({ volume })}
            handleClick={() => this.setState({ process: "demo" })}
          />
        );
      case "demo":
        return (
          <TestDemo
            volume={volume}
            handleClick={() => this.setState({ process: "testing" })}
          />
        );
      case "testing":
        return (
          <SpeechInNoise
            volume={volume}
            handleClick={this.handleTestingClick}
          />
        );

      default:
        return <process />;
    }
  };

  render() {
    return this.renderProcess();
  }
}

export default Test;
