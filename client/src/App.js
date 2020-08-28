import React from "react";
import Main from "./pages/main";
import Consents from "./components/database/consents";
import PreTest from "./components/database/pre-test";
import PostTest1 from "./components/database/post-test-1";
import PostTest2 from "./components/database/post-test-2";
import PostTest3 from "./components/database/post-test-3";
import UserData from "./components/database/user-data";
import Database from "./pages/database";
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
        <Route exact path="/database" component={Database} />
        <Route exact path="/database/consents" component={Consents} />
        <Route exact path="/database/pretest" component={PreTest} />
        <Route exact path="/database/posttest1" component={PostTest1} />
        <Route exact path="/database/posttest2" component={PostTest2} />
        <Route exact path="/database/posttest3" component={PostTest3} />
        <Route exact path="/database/userdata" component={UserData} />
      </BrowserRouter>
    );
  }
}
export default App;
