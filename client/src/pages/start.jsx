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
      consent: {},
      email: "",
      hearing: {},
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ process: "consent" });
    }, 3000);
  };

  handleConsentClick = (email, consents) => {
    this.setState({ email, consents, process: "birth" });
  };

  handleBirthClick = (birth) => {
    this.setState({ birth, process: "hearing" });
  };

  handleHearClick = async (hearing) => {
    await this.setState({ hearing });
    this.props.handleNext();
  };

  renderProcess = () => {
    const { process } = this.state;
    switch (process) {
      case "welcome":
        return <Welcome />;
      case "consent":
        return <Consent handleClick={this.handleConsentClick} />;
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
