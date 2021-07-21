import React, { Component } from 'react';
import "../AddAuthorForm.css"
import {connect} from 'react-redux'
class addauthor extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'dfd',
            imageurl:'dfdf',
            books:['fg'],
            bookTemp:''
        }
        this.onfieldchange=this.onfieldchange.bind(this)
        this.handlesubmit=this.handlesubmit.bind(this)
        this.handleaddbook=this.handleaddbook.bind(this)
    }
    onfieldchange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleaddbook(event){
        this.setState({
            books:this.state.books.concat(this.state.bookTemp),
            bookTemp:''
        })
    }
    handlesubmit(event){
        event.preventDefault();
        this.props.addauthor(this.state,this.props.history) 
    }
    render(){
        console.log(this.props)
        console.log("add auhor rendered")
        return(
            <div className="AddAuthorForm">
                {/* {JSON.stringify(this.props)} */}
                <h1>Add Author</h1>
                <form onSubmit={(event)=>{this.handlesubmit(event);}}>
                    <div className="AddAuthorForm__input">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={this.state.name} onChange={(event)=>{this.onfieldchange(event)}}/>

                    </div>
                    <div className="AddAuthorForm__input">
                        <label htmlFor="Imageurl">ImageUrl:</label>
                        <input type="text" name="imageurl" value={this.state.imageurl} onChange={(event)=>{this.onfieldchange(event)}}/>
                    </div>
                    <div className="AddAuthorForm__input">
                        {this.state.books.map((book)=><p key={book}>{book}</p>)}
                        <label htmlFor="bookTemp">Books </label>
                        <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={(event)=>{this.onfieldchange(event)}}/>
                        <input type="button" value="+"  onClick={(event)=>{this.handleaddbook(event)}}/>
                    </div>

                    <input type="submit" value="Add"/>
                    <div>temp received is {this.props.temp}</div>
                </form>
            </div>
        )
    }
}

function mapstatetoprops(state){
    console.log(state)
    return{
       temp:state.temp
    }
}
function dispatchstatetoprops(dispatch){
    return{
        addauthor:(statee,history)=>{
            dispatch({type:'ADD_AUTHOR',statee,history});
        }
    }
}

export default connect(mapstatetoprops,dispatchstatetoprops)(addauthor)