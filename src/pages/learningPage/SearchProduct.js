import React, { Component } from 'react'

const products = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
]

export default class SearchProduct extends Component {
  render() {
    return <FilterProductTable products={products} />
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleStockChange = this.handleStockChange.bind(this)
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }
  handleStockChange(e) {
    this.props.onStockChange(e.target.checked)
  }

  render() {
    const { filterText, isStockOnly } = this.props
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <label>
          only show products in stock
          <input
            type="checkbox"
            value={isStockOnly}
            onChange={this.handleStockChange}
          />
        </label>
      </form>
    )
  }
}

class ProductTable extends React.Component {
  render() {
    const { filterText, isStockOnly } = this.props
    const map = new Map()
    this.props.products.forEach((product) => {
      const { category, name, stocked } = product
      if (name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return
      }
      if (isStockOnly && !stocked) {
        return
      }
      let rows = map.get(category)
      if (!rows) {
        rows = [<ProductCategoryRow key={category} category={category} />]
        map.set(category,rows)
      }
      rows.push(<ProductRow key={name} product={product} />)
    })
    const allRows = [...map.values()].reduce((accum,item)=>[...accum,...item],[]);

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{allRows}</tbody>
      </table>
    )
  }
}

class ProductCategoryRow extends Component {
  render() {
    const category = this.props.category
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    )
  }
}

class ProductRow extends React.Component {
  render() {
    let { name, price, stocked } = this.props.product
    const style = {
      color: 'red',
    }
    name = stocked ? name : <span style={style}>{name}</span>
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    )
  }
}

class FilterProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      isStockOnly: false,
    }
    this.onFilterTextChange = this.onFilterTextChange.bind(this)
    this.onStockChange = this.onStockChange.bind(this)
  }
  onFilterTextChange(filterText) {
    this.setState({
      filterText,
    })
  }
  onStockChange(isStockOnly) {
    this.setState({
      isStockOnly,
    })
  }
  render() {
    const { filterText, isStockOnly } = this.state
    return (
      <div>
        <SearchBar
          filterText={filterText}
          isStockOnly={isStockOnly}
          onFilterTextChange={this.onFilterTextChange}
          onStockChange={this.onStockChange}
        />
        <ProductTable
          filterText={filterText}
          isStockOnly={isStockOnly}
          products={this.props.products}
        />
      </div>
    )
  }
}
