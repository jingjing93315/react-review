import React, { Component } from 'react'

// Context 可以让我们无需明确传遍每一个组件，就能将值深入传递进组件树
// 为当前的theme创建一个context

const ThemeContext = React.createContext('light')
export default class ContextPage extends Component {
  render() {
    return <App />
  }
}

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value="red">
        <Toolbar />{' '}
      </ThemeContext.Provider>
    )
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}
class ThemeButton extends Component {
  static contextType = ThemeContext

  render() {
    return <input type="button" style={{color: this.context}} value="哈哈" />
  }
}
