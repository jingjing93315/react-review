import React, { useState, useEffect } from "react";

export default function HookPage(props) {
  // 定义一个count的state变量，初始化为0
  const [count, setCount] = useState(0);
  useEffect(
    () => {
      console.log("count effect");
      // count只需要在count发生改变的时候执行
      document.title = `点击了${count}次`;
    },
    [count]
  );
  return (
    <div>
      <h3>CustomHookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{useClock().toLocaleTimeString()}</p>
    </div>
  );
}

// 自定义Hook 命名use开头

function useClock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log("date effect");
    // timer 只需要didMount时候执行
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    // 清除定时器 willUnmount
    return () => clearInterval(timer);
  }, []);
  return date;
}

// error use
// function getNum(){
//   const [num, setNum] = useState(0)
//   return num
// }