import React, { Component } from 'react'

export default class Todo extends Component {
  

    render() {

        return (

                <p> {this.props.newTask}</p>

        )
    }
}

//responsible for displatin the individul tasks from the App
