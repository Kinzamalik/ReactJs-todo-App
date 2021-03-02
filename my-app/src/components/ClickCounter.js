import React, { Component } from 'react'
import UpdatedComponent from './HighOrder';

 class ClickCounter extends Component {

   

    render() {
        const {count,incrementCounter} = this.props

        return (
            <div>
                <button onClick={incrementCounter}>
                    {this.props.name}Click {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)
