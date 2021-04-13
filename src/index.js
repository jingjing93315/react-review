import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./gj.jpg";
import App from "./App";

import store from "./store/";

// const name = "React";
// const obj = {
//   firstName: "Harry",
//   lastName: "Potter",
// };

// const greet = <div>good</div>
// const a = [0,1,2]
// const show = false
// function formatName(name){
//   return name.firstName + " " + name.lastName
// }
// const jsx = (
//   <div>
//     <div>hello, {name}</div>
//     <div>{formatName(obj)}</div>
//     {greet}
//     {show ? greet : '登录'}
//     <ul>
//       {/**
//        * diff的时候，首先比较type，然后是key值，同级同类型元素key值必须要唯一
//        */}
//       {a.map(item => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//     <img src={logo} className="logo" style={{width:"100px"}}/>
//   </div>
// );

ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 基本使用 表达式用{}包裹

store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
