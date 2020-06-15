import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/common/Header';
import Main from './components/common/Main';
import RightBar from './components/common/RightBar';

export default class App extends React.Component {

  state = {
    message: null,
  };

  render() {
    return (
      <div >
        <Header />
        <Main />
        <RightBar />
      </div>
    );
  }
}
