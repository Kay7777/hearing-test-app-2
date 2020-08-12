import React from "react";
import { Button, Container } from "@material-ui/core";
import VolumeSlider from "../../assets/volume-slider";

class VolumeAdjustment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volumeAdjuest: false,
      audio: new Audio(process.env.PUBLIC_URL + "/audios/adjust.wav"),
      audioPlay: false,
      audioVolume: 0.1,
      done: false,
    };
  }
  componentDidMount = () => {
    const { audio, audioVolume } = this.state;
    audio.volume = audioVolume;
  };

  componentDidUpdate = () => {
    const { audio, audioVolume } = this.state;
    console.log("volume:", audioVolume);
    audio.volume = audioVolume;
  };

  calculateDB = (audio) => {
    const audioCtx = new AudioContext();
    const processor = audioCtx.createScriptProcessor(0, 1, 1);
    const source = audioCtx.createMediaElementSource(audio);
    source.connect(processor);
    source.connect(audioCtx.destination);
    processor.connect(audioCtx.destination);
    processor.onaudioprocess = function (evt) {
      const input = evt.inputBuffer.getChannelData(0);
      const len = input.length;
      let total = 0;
      let i = 0;
      let rms; // root mean square
      while (i < len) total += Math.abs(input[i++]);
      rms = Math.sqrt(total / len);
      console.log(rms * 100);
    };
  };

  handleHeadPhone = () => {
    const { volumeAdjuest } = this.state;
    this.setState({ volumeAdjuest: !volumeAdjuest });
  };

  handleSpeaker = () => {
    const { volumeAdjuest } = this.state;
    this.setState({ volumeAdjuest: !volumeAdjuest });
  };

  handlePlay = async () => {
    const { audio } = this.state;
    await audio.play();
    this.setState({ audioPlay: true });
  };

  handleStop = async () => {
    const { audio } = this.state;
    await audio.pause();
    this.setState({ audioPlay: false });
  };

  handleNext = async () => {
    await this.handleStop();
    this.setState({ done: true });
  };

  handleVolume = (volume) => {
    this.setState({ audioVolume: volume / 100 });
    this.props.handleVolume(volume);
  };

  askAudioOutput = () => {
    const { audioPlay } = this.state;
    return (
      <div>
        <Container>
          <h2 className="font-weight-light">
            Set your device's volume to the 50%. Click PLAY to listen to an
            audio sample.
          </h2>
          <h2 className="font-weight-light">
            Then, move the slider below to a comfortable listening level. After
            that, click NEXT to begin the test.
          </h2>
        </Container>
        <VolumeSlider
          handleVolume={this.handleVolume}
          style={{ marginLeft: "30%" }}
        />
        {audioPlay ? (
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleStop}
            style={{ margin: 5, width: 150, backgroundColor: "black" }}
          >
            Stop
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={this.handlePlay}
            style={{
              margin: 5,
              width: 150,
              backgroundColor: "black",
            }}
          >
            Play
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          style={{ margin: 5, width: 150, backgroundColor: "black" }}
          onClick={this.handleNext}
        >
          Next
        </Button>
      </div>
    );
  };

  readyToStart = () => {
    return (
      <div>
        <h2 className="font-weight-light">
          The test is about to begin. Please WAIT until the clip has finished
          playing before typing the numbers you hear. You can't change your
          response once you've entered it.
        </h2>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: 5, width: 150, backgroundColor: "black" }}
          onClick={this.props.handleClick}
        >
          OK
        </Button>
      </div>
    );
  };

  render() {
    const { done } = this.state;
    return (
      <Container>
        <div
          style={{
            textAlign: "center",
            position: "relative",
            marginTop: "20%",
          }}
        >
          {done ? this.readyToStart() : this.askAudioOutput()}
        </div>
      </Container>
    );
  }
}

export default VolumeAdjustment;
