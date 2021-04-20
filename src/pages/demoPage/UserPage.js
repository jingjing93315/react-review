// import React, { Component } from 'react'
// import Layout from './Layout'
// export default class UserPage extends Component {
//     render() {
//         return (
//             <Layout showTopBar={true} showBottomBar = {true} title="用户中心">
//             <div>
//               <h3>UserPage</h3>
//             </div>
//           </Layout>
//         )
//     }
// }

import React, { useContext } from "react";

import { ThemeContext } from "../../Context";

const UserPage = function(props) {
  const ctx = useContext(ThemeContext);
  console.log("ctx", ctx);

  return (
    <div>
      <h3 className={ctx.themeColor}>UserPage</h3>
    </div>
  );
};

export default UserPage;
