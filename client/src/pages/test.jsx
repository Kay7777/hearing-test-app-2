import React from "react";
import Start from "../components/test/start";
import Id from "../components/test/id";
import VolumeAdjustment from "../components/test/adjustment";
import SpeechInNoise from "../components/test/speech-in-noise";
import Environment from "../components/test/environment";
import Submit from "../components/test/submit";
import Result from "../components/test/result";
import Final from "../components/test/final";
import axios from "axios";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      process: "start",
      version: 1, // need to do 3 version here
      volume: 10, // starts at 10/1000
      SNR: null,
      timer: [],
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
        process: "testing",
      });
    } else {
      return null;
    }
  };

  saveData = async () => {
    console.log("Data saved from frontend", this.state);
    const { SNR, result, timer, round, volume, version, id } = this.state;
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
      this.setState({ process: "result" });
    } else {
      await axios.post("/api/data", {
        id,
        SNR2: SNR,
        timer2: timer,
        round,
      });
      this.setState({ process: "final" });
    }
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
            handleClick={() => this.setState({ process: "testing" })}
          />
        );
      case "testing":
        return (
          <SpeechInNoise
            volume={volume}
            handleFinish={(SNR, timer) =>
              this.setState({ process: "submit", SNR, timer })
            }
          />
        );
      case "submit":
        return <Submit handleClick={this.saveData} round={round} />;
      case "result":
        return <Result result={result} />;
      case "final":
        return <Final />;
      default:
        return <process />;
    }
  };

  render() {
    return this.renderProcess();
  }
}

export default Test;
