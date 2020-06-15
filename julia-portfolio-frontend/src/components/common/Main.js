import React from 'react';
import { Switch, Route } from "react-router-dom";
import StartPage from "../startPage/StartPage";

export default class Main extends React.Component {

  state = {
    message: null,
  };

  render() {
    return (
      <Switch>
        <Route exact path='/' component = {StartPage} />
      </Switch>
    );
  }
}
