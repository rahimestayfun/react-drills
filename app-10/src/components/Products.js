import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Products extends Component {
    constructor(){
        super();
        this.state={
          characters: []
        };
      }
      componentDidMount(){
        axios.get('https://www.breakingbadapi.com/api/characters')
        .then((response)=>{this.setState({characters: response.data});
       });
      }
    render() {
        let characters= this.state.characters.map((person,index)=>{
            // if (person.img){
            return(
                <Link key={index} to={`/details/${person.char_id}`}>
                  <img width='250px' height='200px' src={person.img} alt='prison break characters'/>
                </Link>
            );
            // }
        })
        return (
            <div>
                <h1>Prison Break Characters</h1>
                {characters}
                  
            </div>
        )
    }
}
