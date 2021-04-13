import React, { useState, useEffect } from 'react'

export function FunctionComponent(props){
    const [date, setDate] = useState(new Date())
    useEffect(()=>{
        console.log('useEffect');
        // 相当于三个生命周期的集合
        const timer = setInterval(()=> {
            setDate(new Date())
        },1000)

        return ()=> clearInterval(timer)
    }, [])
    return (
        <div>
            <h3>FunctionComponent</h3>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}