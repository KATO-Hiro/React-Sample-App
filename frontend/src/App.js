import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component {
  msgStyle = {
    fontSize: "24pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
  }

  btnStyle = {
    fontSize: "20pt",
    padding: "0px 10px"
  }

  constructor(props) {
    super(props)
    this.state = {
      msg: 'Hello Component.',
    };

    // ステートを更新している
    let timer = setInterval(() => {
      this.setState((state) => ({
        msg: state.msg + "!"
      }));
    }, 10000)
  }

  render() {
    return <div>
      <h1>React</h1>
      <Rect x="50" y="50" w="150" h="150" c="#6ff9" r="50"/>
      <Rect x="150" y="100" w="150" h="150" c="#f6f9" r="75" />
      <Rect x="100" y="150" w="150" h="150" c="#6669" r="25" />

      <p style={this.msgStyle}>{this.state.msg}</p>
      <p style={this.msgStyle}>{this.props.msg}</p>
    </div>;
  }
}

export default App;
