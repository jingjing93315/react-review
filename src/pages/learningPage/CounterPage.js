import {useState, useEffect, useRef} from 'react'
export function CounterPage(){
  const [count, setCount] = useState(0)
  const calculation = count + 100
  const prevCalculation = usePrevious(calculation)
  const prevCount = usePrevious(count)
  return (
    <div>
      <h1>Now: {count}, before: {prevCount}</h1>
      <h1>Now: {calculation}, before: {prevCalculation}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>递增</button>
    </div>
  )
}


// 自定义Hook
function usePrevious(value){
  const ref= useRef()
  useEffect(() => {
    ref.current = value
  });
  return ref.current
}