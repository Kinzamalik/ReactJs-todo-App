import React, { Component } from 'react'

class PureComp extends Component {



    render() {
        console.log('Pure Component Rener')

        return (
            <div>
                pureComponents {this.props.name}
            </div>
        )
    }
}

export default PureComp
