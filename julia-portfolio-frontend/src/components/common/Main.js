import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../Home";

export default class Main extends React.Component {

  state = {
    message: null,
  };

  render() {
    return (
      <Switch>
        <Route exact path='/' component = {Home} />
      </Switch>
    );
  }
}
