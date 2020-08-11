import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Start from "./pages/start";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Start} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
