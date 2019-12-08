import React, { Component } from 'react'

export default class Login extends Component {
    constructor(){
        super()
        this.state={
          username: '',
          password:''
        }
        this.alertLogin = this.alertLogin.bind(this);
      }
        updateUsername(name){
          this.setState({username:name});
        }
        updatePassword(pass){
          this.setState({password: pass})
        }
        alertLogin(){
            alert(`Username: ${this.state.username} Password: ${this.state.password}`)  
        }
    
        
    render() {
        return (
            <div>
                <input onChange={(e)=>this.updateUsername(e.target.value)}/>
                <input onChange={(e)=>this.updatePassword(e.target.value)}/>
                <button onClick={this.alertLogin}>Login</button>
            </div>
        )
    }
}
