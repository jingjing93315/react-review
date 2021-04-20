import React, { Component } from "react";
import styles from "./index.module.scss";

const menu = [
  {
    title: "首页",
    icon: "shouye",
    link: "/",
  },
  {
    title: "购物车",
    icon: "gouwuchekong",
    link: "/cart",
  },
  {
    title: "订单列表",
    icon: "dingdan",
    link: "/orderlist",
  },
  {
    title: "用户中心",
    icon: "wode",
    link: "/user",
  },
];

export default class BottomNav extends Component {
  render() {
    return (
      <div className={styles.main}>
        {menu.map((item, index) => 
          <MenuItem key={item.link} {...item} />
        )}
      </div>
    );
  }
}

function MenuItem({ title, icon }) {
  console.log("title");
  return (
    <div>
      <span className={"iconfont icon-" + icon}></span>
      <span className={styles.title}>{title}</span>
    </div>
  );
}
