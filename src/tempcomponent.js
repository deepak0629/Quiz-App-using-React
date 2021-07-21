import React, { Component } from 'react'

var _=require("lodash")
class tempcomponent extends Component{
    constructor(props){
        super(props)
        this.state=props
    }
    render(){
        console.log(this.props)
        // var temp=(v)=>{
        //     return(
        //         <button key={v} id={v} onClick={(event)=>{
        //             this.props.buttononclick(event.target.id)
        //         }}>
        //         {v}
        //         </button>
        //     )
        // }
        
        // return(
            if(this.props.isvisable==true){
                return this.props.children
            }
            else{
                return null
            }
            // _.range(1,10).map(temp)

        // )
    }
}

export default tempcomponent;
