import React from "react";
import Start from "./pages/start";
import Test from "./pages/test";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      process: "start",
    };
  }

  handleStartNext = () => {
    this.setState({ process: "test" });
  };

  renderProcess = () => {
    const { process } = this.state;
    switch (process) {
      case "start":
        return <Start handleNext={this.handleStartNext} />;
      case "test":
        return <Test />;
      default:
        return null;
    }
  };

  render() {
    return this.renderProcess();
  }
}
export default App;
