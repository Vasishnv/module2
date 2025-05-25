import React, { Component } from 'react'
import { ButtonStyle,maindiv,divstyle } from './Func';
export default class Classc extends Component {

    constructor(props){
        super(props)
        this.state ={cnt:0,};
    }
     inc = ()=>{
        this.setState({ cnt:this.state.cnt+1,});
    }
    dec = ()=>{
        this.setState({ cnt:this.state.cnt-1,});
    }


  render() {
    return (
      <div style={maindiv}>
        <h1>This is done using class component</h1>
        <div style={maindiv}>
            <div  style={divstyle}>{this.state.cnt}</div>
           <div>
             <button onClick={this.inc} style={ButtonStyle}>+</button>
            <button onClick={this.dec} style={ButtonStyle}>-</button>
           </div>
        </div>

      </div>
    )
  }}
