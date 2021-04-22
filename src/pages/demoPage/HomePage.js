import React, { Component } from "react";
import { ThemeContext, ThemeConsumer } from "../../Context";
import UserPage from "./UserPage";

class HomePage extends Component {
  // static contextType = ThemeContext;
  render() {
    const { themeColor } = this.context;
    return (
      // <Layout showTopBar={false} showBottomBar={true} title="商城首页">
      <div>
        <h3 className={themeColor}>HomePage</h3>
        <ThemeConsumer>
          {ThemeContext => <div className={ThemeContext.themeColor}>一线蓝光</div>}
        </ThemeConsumer>
        <UserPage/>
      </div>
      /* {{
          content: (
            <div>
              <h3>HomePage</h3>
            </div>
          ),
          txt: "这是个文本",
          btnClick: () => {
            console.log("btnClick");
          },
        }} */
      // </Layout>
    );
  }
}

HomePage.contextType = ThemeContext

export default  HomePage