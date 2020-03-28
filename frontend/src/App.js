import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component {
  data = [];

  msgStyle = {
    fontSize: "24pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
  }

  msgStyle1 = {
    fontSize: "24pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
  }

  msgStyle2 = {
    fontSize: "20pt",
    color: "white",
    backgroundColor: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
  }

  btnStyle = {
    fontSize: "16pt",
    padding: "10px"
  }

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      msg: 'count start!',
      flag: true,
    };

    // ステートを更新している
    // let timer = setInterval(() => {
    //   this.setState((state) => ({
    //     msg: state.msg + "!"
    //   }));
    // }, 10000)

    this.doAction = this.doAction.bind(this);
  }

  // e: イベントの情報をまとめたオブジェクトが入っている
  doAction(e) {
    this.setState((state) => ({
      counter: state.counter + 1,
      msg: 'count: ' + state.counter,
      flag: !state.flag // flagを切り替えている
    }));
  }

  render() {
    return <div>
      <h1>React</h1>
      {/* <Rect x="50" y="50" w="150" h="150" c="#6ff9" r="50"/>
      <Rect x="150" y="100" w="150" h="150" c="#f6f9" r="75" />
      <Rect x="100" y="150" w="150" h="150" c="#6669" r="25" /> */}

      {this.state.flag ?
        <p style={this.msgStyle1}>count: {this.state.msg}</p>
        :
        <p style={this.msgStyle2}>{this.state.msg}です。</p>
      }
      <button style={this.btnStyle} onClick={this.doAction}>click</button>
      {/* <p style={this.msgStyle}>{this.props.msg}</p> */}
    </div>;
  }
}

export default App;
