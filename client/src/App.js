import React from "react";
import Main from "./pages/main";
import Page1Question from "./pages/page1-question";
import Page3Question from "./pages/page3-question";
import UserData from "./pages/user-data";
import { Route, BrowserRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/q1" component={Page1Question} />
        <Route exact path="/q3" component={Page3Question} />
        <Route exact path="/data" component={UserData} />
      </BrowserRouter>
    );
  }
}
export default App;
