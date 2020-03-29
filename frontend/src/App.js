import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';

let data = {title: 'Title',
  message: 'this is samle message.'};

const SampleContext = React.createContext(data);

let theme = {
  light: {
    backgroundColor: "#eef",
    color: "#006",
    padding: "10px"
  },
  dark: {
    backgroundColor: "#006",
    color: "#eef",
    padding: "10px"
  }
}

const ThemeContext = React.createContext(theme.dark);

class App extends Component {
  static contextType = ThemeContext;

  // data = [];

  // data = [
  //   "This is list sample.",
  //   "これはリストのサンプルです。",
  //   "配列をリストに変換します。"
  // ];

  newData = {title: '新しいタイトル',
    message: 'これは新しいメッセージです。'}

  input = '';

  msgStyle = {
    fontSize: "20pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
  }

  // inputStyle = {
  //   fontSize: "12pt",
  //   padding: "5px"
  // }

  // area = {
  //   width: "500px",
  //   height: "500px",
  //   border: "1px solid blue"
  // }

  // msgStyle1 = {
  //   fontSize: "24pt",
  //   color: "#900",
  //   margin: "20px 0px",
  //   padding: "5px",
  //   borderBottom: "2px solid #900"
  // }

  // msgStyle2 = {
  //   fontSize: "20pt",
  //   color: "white",
  //   backgroundColor: "#900",
  //   margin: "20px 0px",
  //   padding: "5px",
  //   borderBottom: "2px solid #900"
  // }

  // btnStyle = {
  //   fontSize: "16pt",
  //   padding: "10px"
  // }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     message: 'type your name:'
  //     // list:this.data
  //     // counter: 0,
  //     // msg: 'count start!',
  //     // flag: true,
  //   };

  //   // ステートを更新している
  //   // let timer = setInterval(() => {
  //   //   this.setState((state) => ({
  //   //     msg: state.msg + "!"
  //   //   }));
  //   // }, 10000)

  //   // this.doAction = this.doAction.bind(this);
  //   // this.doChange = this.doChange.bind(this);
  //   // this.doSubmit = this.doSubmit.bind(this);
  //   this.doCheck = this.doCheck.bind(this);
  // }

  // // e: イベントの情報をまとめたオブジェクトが入っている
  // doAction(e) {
  //   let x = e.pageX;
  //   let y = e.pageY;

  //   this.data.push({x:x, y:y});
  //   this.setState((state) => ({
  //     list:this.data
  //     // counter: state.counter + 1,
  //     // msg: 'count: ' + state.counter,
  //     // flag: !state.flag // flagを切り替えている
  //   }));
  // }

  // draw(d) {
  //   let s = {
  //     position: "absolute",
  //     left: (d.x - 25) + "px",
  //     top: (d.y - 25) + "px",
  //     width: "50px",
  //     height: "50px",
  //     backgroundColor: "#66f3",
  //   }

  //   return <div style={s}></div>
  // }

  // doChange(event) {
  //   this.input = event.target.value;
  // }

  // doSubmit(event) {
  //   this.setState({
  //     message: 'Hello, ' + this.input + '!!'
  //   });
  //   event.preventDefault();
  // }

  // doCheck(event) {
  //   alert(event.target.value + "は長すぎます（最大10文字）。");
  // }

  render() {
    return <div style={this.context}>
      <Title value="Content Page" />
      <Message value="This is Content Sample." />
      <Message value="※これはテーマのサンプルです。" />
      {/* <h1>Context</h1>
      <Title />
      <Message />
      <SampleContext.Provider value={this.newData}>
        <Title />
        <Message />
      </SampleContext.Provider>
      <Title />
      <Message /> */}
      {/* <h1>React</h1>
      <h2>{this.state.message}</h2> */}
      {/* <form onSubmit={this.doSubmit}>
        <label>
          <span style={this.inputStyle}></span>Message:
          <input type="text"
            style={this.inputStyle}
            onChange={this.doChange}
            required pattern="[A-Za-z _,.]+" />
        </label>
        <input type="submit" style={this.inputStyle} value="click" />
      </form> */}
      {/* <Message maxlength="10" onCheck={this.doCheck} /> */}
      {/* <Message title="Children!">
        これはコンポーネント内のコンテンツです。
        マルでテキストを分割し、リストにして表示します。
        改行は必要ありません。
      </Message> */}
      {/* <h2 style={this.msgStyle}>show list.</h2> */}
      {/* <List title="サンプル・リスト" data={this.data} /> */}
      {/* <h2 style={this.msgStyle}>show rect.</h2>
      <div style={this.area} onClick={this.doAction}>
        {this.data.map((value) => this.draw(value))}
      </div> */}
      {/* <Rect x="50" y="50" w="150" h="150" c="#6ff9" r="50"/>
      <Rect x="150" y="100" w="150" h="150" c="#f6f9" r="75" />
      <Rect x="100" y="150" w="150" h="150" c="#6669" r="25" /> */}

      {/* {this.state.flag ?
        <p style={this.msgStyle1}>count: {this.state.msg}</p>
        :
        <p style={this.msgStyle2}>{this.state.msg}です。</p>
      } */}
      {/* <button style={this.btnStyle} onClick={this.doAction}>click</button> */}
      {/* <p style={this.msgStyle}>{this.props.msg}</p> */}
    </div>;
  }
}

// class List extends Component {
//   number = 1;

//   title = {
//     fontSize: "20pt",
//     fontWeight: "bold",
//     color: "blue",
//   };

//   render() {
//     let data = this.props.data;

//     return (
//       <div>
//         <p style={this.title}>{this.props.title}</p>
//           <ul>
//             {data.map((item) =>
//               <Item number={this.number++} value={item} key={this.number} />
//             )}
//           </ul>
//       </div>
//     );
//   }
// }

// class Item extends Component {
//   li = {
//     listStyleType: "square",
//     fontSize: "16pt",
//     color: "#06",
//     margin: "0px",
//     padding: "0px",
//   }

//   num = {
//     fontWeight: "bold",
//     color: "red"
//   }

//   render() {
//     return (
//       <li style={this.li}>
//         <span style={this.num}>[{this.props.number}]</span>
//           {this.props.value}
//       </li>
//     );
//   }
// }

// class Message extends Component {
//   // li = {
//   //   fontSize: "16pt",
//   //   color: "#06",
//   //   margin: "0px",
//   //   padding: "0px"
//   // }
//   inputStyle = {
//     fontSize: "12pt",
//     padding: "5px"
//   }

//   constructor(props) {
//     super(props);
//     this.doChange = this.doChange.bind(this);
//   }

//   doChange(e) {
//     if (e.target.value.length > this.props.maxlength) {
//       this.props.onCheck(e);
//       e.target.value = e.target.value.substr(0, this.props.maxlength);
//     }
//   }

//   render() {
//     return <input type="text" style={this.inputStyle} onChange={this.doChange} />
//     // let content = this.props.children;
//     // let arr = content.split('。')
//     // let arr2 = [];

//     // for (let i = 0; i < arr.length; i++) {
//     //   if (arr[i].trim() != '') {
//     //     arr2.push(arr[i]);
//     //   }
//     // }

//     // let list = arr2.map((value, key) => (
//     //   <li style={this.li} key={key}>{value}.</li>)
//     // );

//     // return <div>
//     //   <h2>{this.props.title}</h2>
//     //   <ol>{list}</ol>
//     // </div>
//   }
// }

class Title extends Component {
  // static contextType = SampleContext;
  static contextType = ThemeContext;

  render() {
    return (
      <div>
        <h2 style={this.context}>{this.props.value}</h2>
      </div>
    )
  }
}

class Message extends Component {
  // static contextType = SampleContext;
  static contextType = ThemeContext;

  render() {
    return (
      <div>
        <p style={this.context}>{this.props.value}</p>
      </div>
    )
  }
}

export default App;
