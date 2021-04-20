import React, { Component } from 'react'
import { ThemeProvider } from '../../Context'
import HomePage from './HomePage'




export default class ContextPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: {
                themeColor: 'blue'
            }
        }
    }
    
    render() {
        const {theme} = this.state
        return (
            <div>
                <h3>ContextPage</h3>
               <ThemeProvider value={theme}>
                   <HomePage/>
               </ThemeProvider>
            </div>
        )
    }
}
