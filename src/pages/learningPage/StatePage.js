import React from "react";


export default class StatePage extends React.Component{
  render(){
    return (
      <Clock />
    )
  }
}


class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }
  // 生命周期方法 在组件已经被渲染到DOM中后运行
  componentDidMount(){
    this.timerID = setInterval(
      ()=> this.tick(),1000
    )
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  tick(){
    this.setState({
      date: new Date()
    })
  }
  render(){
    return(
      <div>
        <h1>hello,world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}