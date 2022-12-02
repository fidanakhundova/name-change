import React, {Component}  from 'react'

export default class Salam extends Component{
    state ={
        user: {
            name:"",
            lastName:"",
            age:0
        },
        nnn:{
            name:""
        }
    }


handleClick=()=>{
    this.setState({user:{...this.state.user,name:"Fidan"}})
    console.log({user:{...this.state.user,name:"Fidan"}})
}

render() {
    return( 
        <>
        <p>{JSON.stringify(this.state)}</p>
        <button onClick={this.handleClick} >clickkkk</button>
        </>
        
    )
    }
}