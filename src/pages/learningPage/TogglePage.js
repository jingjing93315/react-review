import React from 'react'
export default class  TogglePage  extends React.Component {
  render (){
    return(
      <Toggle />
    )
  }
}


class Toggle extends React.Component {
  constructor(props){
    super(props)
    this.state = { isToggleOn: true }

    // 为了在回调中使用`this`。绑定必不可少
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick (){
    this.setState(prevState=>({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render(){
    return(
      <button onClick={()=> this.handleClick()}>
        {this.state.isToggleOn ? 'ON': 'OFF'}
      </button>
    )
  }
}