import React from "react";
import {
  Container,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";

class Consent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        "Do you understand that you have been asked to participate in a research study?",
        "Have you read the information at the top of the page?",
        "Do you understand the benefits and risks involved in taking part in this research study?",
        "Do you understand that you are invited to contact the researchers (csdhear@ualberta.ca) if you have questions about the study?",
        "Do you understand that you are free to withdraw from this study at any time (by closing your browser window), without having to give a reason?",
        "Do you understand that the personal information you provide by participating in this study will be kept confidential and will not be accessed or used by anyone outside this study?",
        "I agree to take part in this study",
      ],
      consents: {},
      email: "",
    };
  }

  handleConsent = (index, value) => {
    const { consents, questions } = this.state;
    consents[questions[index]] = value;
    this.setState({ consents });
  };

  render() {
    const { questions, email, consents } = this.state;
    return (
      <Container>
        <h2 style={{ textAlign: "right", marginTop: "5%", marginRight: "5%" }}>
          1
        </h2>
        <div
          style={{
            position: "relative",
            marginTop: "3%",
            marginBottom: "10%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          <hr />
          <h4>
            Please read the following information carefully and respond to the
            informed consent questions at the bottom of the page.{" "}
          </h4>
          <h5>
            Speech-in-noise tests have been used by audiologists for many years.
            They involve listening for speech sounds against competing
            background noise and repeating the words you hear. In recent years,
            the use of digits (rather than words or sentences) has been proposed
            as a solution to the challenges faced by non-native English speakers
            in traditional speech-in-noise tests. As online health-care options
            continue to expand, hearing care professionals are interested in the
            experience of users who self-administer digits-in-noise testing on
            websites.
          </h5>
          <br />
          <h6>Procedures (Approximately 10 - 15 minutes total)</h6>
          <br />
          <h5>
            1. Answering Demographic Questions You will be asked to answer some
            questions about yourself and your health.
          </h5>
          <h5>
            2. Digits in Noise Test You will use headphones to complete the
            3-minute test. You will hear the names of digits (e.g., "one, seven,
            two") spoken aloud against competing background conversation. Enter
            the numbers you hear. The volume of the speech goes up and down.
          </h5>
          <h5>
            3. Completing a questionnaire You will be asked to complete a brief
            questionnaire that gathers information about your experience with
            the digits in noise test and your attitudes about hearing health in
            general.
          </h5>
          <br />
          <hr />
          <h4>Please note the following:</h4>
          <h5>
            - The hearing test may not work with Internet Explorer. We recommend
            Chrome, Firefox, Safari, Edge, or Opera.
          </h5>
          <h5>
            - You cannot move Back in your browser during this study. You may
            only navigate by using the 'Next Page' button at the bottom of each
            page.
          </h5>
          <br />
          <h4>Possible Benefits:</h4>
          <h5>
            Participating in this study may help you better understand your
            hearing and the tools that are used to test hearing.
          </h5>
          <br />
          <h4>Possible Risks:</h4>
          <h5>
            Because this study involves having your hearing tested, it is
            possible that you may learn that you have a hearing loss you were
            unaware of. If this turns out to be the case, you will be referred
            to one of the audiologists on our research team for guidance and
            information about hearing resources you can access in the community.
          </h5>
          <br />
          <h4>Confidentiality:</h4>
          <h5>
            Only the investigators doing this study will see the information
            collected. The University of Alberta’s Health Research Ethics Board
            also has the right to access the study records if necessary. We will
            not give your name or other identifying information to anyone
            outside the study. The information you give will be kept for a total
            of five years after the study is done. The investigators will store
            the information on an encrypted computer. Your name will not be
            attached to the data you provide. Your name will not be used in any
            presentation or publication.
          </h5>
          <br />
          <h4>Withdrawal:</h4>
          <h5>
            Your participation is voluntary. You do not have to take part in
            this study. If you choose to participate, you may withdraw at any
            point in the study. You do not need to give us a reason. You will be
            free to withdraw your data from this study at any point up to a week
            following your visit to the laboratory. You may indicate your desire
            to have your data withdrawn by contacting the researchers.
          </h5>
          <br />
          <h4>Contact:</h4>
          <h5>
            You may ask questions at any time throughout your participation in
            the study. If you have any further questions about this study later
            on, please contact csdhear@ualberta.ca or Dr. Bill Hodgetts
            (780-492-0834).
          </h5>
          <h5>
            If you have any concerns about the study, please call the Health
            Panel Administrator at the University of Alberta Health Research
            Ethics Board (780-492-2615).
          </h5>
          <br />
          <hr />
          <br />
          {questions.map((question, index) => {
            return (
              <FormControl component="fieldset" style={{ marginBottom: 10 }}>
                <h4 component="legend">{question}</h4>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                  onChange={(e) => this.handleConsent(index, e.target.value)}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            );
          })}

          <h4>
            Please enter your email address to continue. This will allow us to
            keep track of our study responses.
          </h4>
          <TextField
            label="email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
            style={{ width: 200 }}
          />
          <Button
            color="primary"
            variant="contained"
            style={{
              backgroundColor: "black",
              width: "15%",
              marginTop: 10,
              marginLeft: 10,
            }}
            onClick={() => this.props.handleClick(email, consents)}
          >
            Next
          </Button>
          <br />
          <br />
          <hr />
        </div>
      </Container>
    );
  }
}

export default Consent;
