import React, { Component } from 'react'
import Book from "./book"

class turn extends Component{
    render(){
        var highcolor=function gethighcolor(answer){
            var mapper={
                'none':'white',
                'correct':'green',
                'wrong':'red'
            }
            return mapper[answer]
        }
        return(
            <div className="row turn" style={{backgroundColor:highcolor(this.props.highcolor)}}>
                <div className="col-4 offset-1">
                    <img src={this.props.author.imageUrl} className="authorimage" alt="Author"/>
                </div>
                <div className="col-6">
                    {this.props.books.map((title)=><Book title={title} key={title} onclick={this.props.onbookclick} ></Book>)}
                </div>
            </div>
        )
    }
}

export default turn