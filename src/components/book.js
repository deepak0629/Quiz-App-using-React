import React, { Component } from 'react'

class book extends Component{
    render(){
        return(
            <div className="answer" onClick={
                ()=>{
                    this.props.onclick(this.props.title)
                }
            } >
               <h4> {this.props.title}</h4>
            </div>
        )
    }
}

export default book