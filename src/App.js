// import ContextPage from "./pages/demoPage/ContextPage";
// import MyRCFieldForm from "./pages/demoPage/MyRCFieldForm";
// import HookPage from "./pages/demoPage/HookPage";
import ReactReduxHookPage from "./pages/demoPage/ReactReduxHookPage";
// import ReactReduxPage from "./pages/demoPage/ReactReduxPage";

function App() {
  return (
    <div className="App">
      {/* <ReduxPage/> */}
      {/* <MyRCField/Form /> */}
      {/* <HookPage /> */}
      {/* { <ReactReduxPage /> } */}
      <ReactReduxHookPage/> 
    </div>
  );
}

export default App;

// const array1 = [1,2,3,4]
// const reducer = (accumulator, currentValue)=>{
//   console.log(accumulator, currentValue);

//   return accumulator+currentValue
// }

// console.log(array1.reduce(reducer));

// function f1(arg) {
//   console.log("f1", arg);
//   return arg;
// }

// function f2(arg) {
//   console.log("f2", arg);
//   return arg;
// }

// function f3(arg) {
//   console.log("f3", arg);
//   return arg;
// }

// todo 全部执行这三个函数
// 方法一
// f1('gj')
// f2('gj')
// f3('gj')

// 方法二 不利于维护
// f1(f2(f3('gj')))

// !方法三 函数式编程 compose 柯里化
// 返回值 是一个函数
// function compose(...funcs) {
//   if (funcs.length === 0) {
//     return (arg) => arg;
//   }
//   if(funcs.length === 1){
//     return funcs[0]
//   }
//   return funcs.reduce((a, b) => (...args) => a(b(...args)));
// }
// 适配  参数值可以是0到多个
// f1,f2,f3
// let res = compose(f1)("gj");

// console.log("res", res);
