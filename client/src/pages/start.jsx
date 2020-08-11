import React from "react";
import Welcome from "../components/start/welcome";
import Consent from "../components/start/consent";
import Thanks from "../components/start/thanks";
import Hearing from "../components/start/hearing";
import Birth from "../components/start/birth";

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      process: "welcome",
      consent: undefined,
      value: 50,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ process: "consent" });
    }, 3000);
  };

  handleConsentClick = (res) => {
    if (res === "yes") {
      this.setState({ process: "birth", consent: res });
    } else {
      this.setState({ process: "thanks", consent: res });
    }
  };

  handleBirthClick = (birth) => {
    this.setState({ birth, process: "hearing" });
  };

  handleHearClick = (value) => {
    this.setState({ value });
  };

  renderProcess = () => {
    const { process } = this.state;
    switch (process) {
      case "welcome":
        return <Welcome />;
      case "consent":
        return <Consent handleClick={this.handleConsentClick} />;
      case "thanks":
        return <Thanks />;
      case "birth":
        return <Birth handleClick={this.handleBirthClick} />;
      case "hearing":
        return <Hearing handleClick={this.handleHearClick} />;
      default:
        return null;
    }
  };

  render() {
    return this.renderProcess();
  }
}

export default Start;
