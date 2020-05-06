import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/common/Header';
import Main from './components/common/Main';

export default class App extends React.Component {

  state = {
    message: null,
  };

  render() {
    return (
      <div >
        <Header />
        <Main />
      </div>
    );
  }
}
