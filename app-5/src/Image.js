import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <div>
                <img width='800px' src={this.props.src}></img>
                <p>Monkey Image</p>
                
            </div>
        )
    }
}
