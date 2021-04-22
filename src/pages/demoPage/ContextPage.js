import React, { Component } from "react";
import { ThemeProvider } from "../../Context";
import HomePage from "./HomePage";

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: 'red',
      },
    };
  }

  changeColor = () => {
    const { themeColor } = this.state.theme;
    this.setState({
      theme: {
        themeColor: themeColor === "red" ? "blue" : "red",
      },
    });
  };

  render() {
    const { theme } = this.state;
    return (
      <div>
        <h3>ContextPage</h3>
        <button onClick={this.changeColor}>change color</button>
        <ThemeProvider value={theme}>
          <HomePage />
        </ThemeProvider>
      </div>
    );
  }
}
