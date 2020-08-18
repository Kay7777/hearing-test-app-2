import React from "react";
import axios from "axios";
import QuestionTable from "../assets/question-table";
import { TextField, Button, Container } from "@material-ui/core";

class Page3Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      question: "",
    };
  }
  componentDidMount = async () => {
    const doc = await axios.get("/api/page3/questions");
    this.setState({ questions: doc.data });
  };

  handleDelete = async (id) => {
    await axios.delete("/api/page3/questions/" + id);
    await this.setState({ question: "" });
    this.componentDidMount();
  };

  handleAdd = async () => {
    await axios.post("/api/page3/questions", { question: this.state.question });
    await this.setState({ question: "" });
    this.componentDidMount();
  };

  render() {
    const { questions, question } = this.state;
    return (
      <Container>
        <div className="jumbotron">
          <h1 style={{ margin: 20 }}>Page 3 questions</h1>
        </div>
        <div
          style={{
            position: "relative",
            marginTop: "5%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          <TextField
            label="question"
            value={question}
            style={{ width: 300 }}
            multiline={true}
            onChange={(e) => this.setState({ question: e.target.value })}
          />
          <Button variant="contained" color="primary" onClick={this.handleAdd}>
            Add
          </Button>
          <br />
          <br />
          <QuestionTable rows={questions} handleDelete={this.handleDelete} />
        </div>
      </Container>
    );
  }
}

export default Page3Question;
