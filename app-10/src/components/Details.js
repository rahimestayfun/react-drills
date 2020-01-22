import React, { Component } from 'react';
import axios from 'axios';

export default class Details extends Component {
    constructor(){
        super();
        this.state={
            character:{}
        };
    }
    componentDidMount(){
        const {match}=this.props
        axios.get(`https://www.breakingbadapi.com/api/characters/${match.params.char_id}`)
        .then(response=>{this.setState({character: response.data});
       });
      }
    render() {
        const {character}= this.state;
        return (
            <div>
                <h2>{character.name}</h2>
                <img width='250px' height='200px' src={character.img} alt='prison break characters'/>
                <h3>He is {character.nickname}</h3>
            </div>
        )
    }
}
