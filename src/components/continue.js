import React, { Component } from 'react'


class continuee extends Component{
    render(){
        var show=this.props.show
        var oncontinue=this.props.oncontinue
        return(
            <div className="row continue">
            {
                show?<div className="col-11">
                    <button className="btn btn-primary btn-lg float-right" value="continue" onClick={()=>{this.props.oncontinue()}}>Continue</button>
                </div> : null
            }
            </div>
        )
    }
}


export default continuee