import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

  state = {
    message: null,
  };  

  componentDidMount() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');

    var miInit = { method: 'GET',
              headers: headers,
              mode: 'cors',
              cache: 'default' };

    fetch("http://localhost:5000", miInit)
      .then(response => response.json())
      .then(data => this.setState({message: data.message}))
      .catch(error => this.setState({message: 'Error'}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.message}
          </a>
        </header>
      </div>
    );
  }
}
