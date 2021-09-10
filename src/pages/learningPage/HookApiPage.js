import { useState } from 'react'

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount)
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  )
}
/**
 * 函数式更新，如果新的state需要通过使用先前的state计算得出，可以将函数传递给setState,
 * 该函数将接受先前的state，返回一个更新后的值
 */
const HookApiPage = () => {
  return <Counter {...{initialCount: 0}} />
}
export default HookApiPage
