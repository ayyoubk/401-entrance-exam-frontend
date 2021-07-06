import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Fav from "./components/Fav";

import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/">
            <Fav />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
