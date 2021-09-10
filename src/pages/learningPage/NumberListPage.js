import React from 'react'
export default class NumberLstPage extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4, 5]
    return <NumberList numbers={numbers} />
  }
}

function ListItem(props) {
  return <li>{props.value}</li>
}

function NumberList(props) {
  const numbers = props.numbers
  // const listItems = numbers.map((number) => (
  //   //  经验： 在map()方法中的元素需要设置key属性
  //   <ListItem key={number.toString()} value={number} />
  // ))
  // return <ul>{listItems}</ul>
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  )
}
