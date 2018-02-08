import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: true
    }
  }
  render() {
    return (
      <div>React Rendered</div>
    )
  }
};

export default App;
