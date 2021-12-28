import React, { Component } from 'react'

 class Header extends Component {
    render() {
        return (
            <div>
              <h2> Too many students in the React class </h2>
              <h3>{this.props.children}</h3>
              <h4> All the Students Must be present in the React class :{this.props.count}</h4>
            </div>
        )
    }
}
export default Header
