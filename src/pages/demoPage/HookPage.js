import React, {  useEffect, useReducer } from "react";
import {counterReducer} from '../../store'
// 修改初始值
const init = initArg => initArg - 0
export default function HookPage(props) {
  // 定义一个count的state变量，初始化为0
  // const [count, setCount] = useState(0);
  // const [date, setDate] = useState(new Date());
  // 为啥用中括号， 方便自定义命名
  const [state, dispatch] = useReducer(counterReducer,"0", init)

  useEffect(()=>{
    // console.log()
  },[state])
  return (
    <div>
      <h3>HookPage</h3>
      <p>{state}</p>
      <button onClick={() => dispatch({type: 'ADD',payload: 100})}>add</button>
      {/* <p>{date.toLocaleTimeString()}</p> */}
    </div>
  );
}
