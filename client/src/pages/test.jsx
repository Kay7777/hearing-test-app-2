import React from "react";
import Start from "../components/test/start";
import Id from "../components/test/id";
import VolumeAdjustment from "../components/test/adjustment";
import SpeechInNoise from "../components/test/speech-in-noise";
import TestDemo from "../components/test/test-demo";
import Environment from "../components/test/environment";
import axios from "axios";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      process: "start",
      version: 1, // need to do 3 version here
      volume: 10, // starts at 10/1000
      SNR: null,
      result: ["pass", "fail"][Math.floor(Math.random() * 2)],
      round: 1, // initial round is 1
      id: null,
    };
  }

  handleIdClick = async (id) => {
    const index = Number(id) % 3;
    this.setState({ process: "environment", id, version: index + 1 });
    const doc = await axios.get("/api/data/" + id);
    if (doc.data) {
      this.setState({
        round: 2,
        volume: doc.data.volume,
        searchDone: true,
        process: "demo",
      });
    } else {
      return null;
    }
  };

  handleTestingClick = (SNR, timer) => {
    const { id, version, volume, round, result } = this.state;
    this.props.handleNext(id, version, volume, round, result, SNR, timer);
  };

  renderProcess = () => {
    const { process, round, result, volume } = this.state;
    switch (process) {
      case "start":
        return <Start handleClick={() => this.setState({ process: "id" })} />;
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
