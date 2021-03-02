import React, { Component } from 'react'
import UpdatedComponent from "./HighOrder";



 class HoverCounter extends Component {

   


    render() {
        const {count,incrementCounter} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCounter}>
                {this.props.name}Hoverd {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)
