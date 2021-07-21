import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'
import Hero from './components/hero'
import Turn from "./components/turn"
import Continue from "./components/continue"
import Footer from "./components/footer"
import {Router,Route} from 'react-router'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Addauthor from './components/addauthor'
import {withRouter} from 'react-router-dom'
// var Link=Router.Link
class AuthorQuiz extends Component {
  constructor(props){
    super(props)
    this.state={
      highlightcolor:'',
      correct:false
    }
    this.bookclick=this.bookclick.bind(this)
    // this.oncontinue=this.oncontinue.bind(this)
    console.log("hi")
  }
  componentWillMount(){
    console.log("component will be mounted")
  }
  componentDidMount(){
    console.log("compoent did mounted")
  }
  bookclick(answer){
    console.log(answer)
    const iscorrect=this.props.Turndata.author.books.some((book)=> book===answer)
    var highlightcolortemp=iscorrect?'correct':'wrong'
    this.setState({highlightcolor:highlightcolortemp,correct:iscorrect})
    console.log(this.state)
  }
  // oncontinue(){
  //   this.setState({correct:false})
  //   // this.render()
  //   this.props.changestate()
  // }
  render() {
   var temproute= { 
      pathname: "/addauthor", 
      param1: "Par1" 
    }
    console.log(this.props)
    console.log("author quiz is renderd")
    return (
      <div className="container-fluid">
      {/* hiii */}
        <Hero/> 
        <Turn {...this.props.Turndata} onbookclick={this.bookclick} highcolor={this.state.highlightcolor}/>
        <Continue show={this.state.highlightcolor==='correct'} oncontinue={this.props.oncontinue}/>
        <p><Link to={temproute} > click here to add author</Link></p>
        <Footer/>
        <div>temp here in componet is {this.props.temp}</div>
        {/* <Route   component={(props)=><Addauthor {...this.props} {...props}/>}/> */}
        
        {/* {React.cloneElement(this.props.children)} */}
      </div>
    );
  }
}

// export default AuthorQuiz;
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './bootstrap.min.css';
// import PropTypes from 'prop-types';
// import Tempcomponent from './tempcomponent'
// var tempp;
// class AuthorQuiz extends Component {
//   constructor(props){
//     super(props)
//     this.state={click:0,
//       isvisable:true}
//     console.log("hi")
//   }
//   PropTypes(){
//     return({
//       temp:PropTypes.string.isRequired
//     })
   
//   }
//   componentWillMount(){
//     console.log(`${this.props}component will be mounted`)
//   }
//   componentDidMount(){
//     console.log("compoent did mounted")
//   }
//   buttononclick(button){
//     console.log(`clicked ${button}`)
//   }
//   render() {
//     var props={a:3,
//       b:4,
//       buttononclick:this.buttononclick,
//     isvisable:this.state.isvisable}
//     tempp=this
//     // setInterval(()=>{
//     //   // state.
//     //   tempp.setState({isvisable:!tempp.state.isvisable})
//     // },2000,tempp)
//     return (
//       <div onClick={
//         (event,target)=>{
//           console.log(event)
//           console.log(target)
//           this.setState({click:this.state.click+1});
//         }
//       }>
//         this div has been clicked {this.state.click} times.
//         <Tempcomponent {...props}>
//         <div>
//                 <h1>The sum of {props.a}+ {props.b} is </h1>
//                 <h1>{props.a+props.b}</h1>
//           </div>
//         </Tempcomponent>
//       </div>
//     );
//   }
// }
function mapstatetoprops(state){
  return{
    temp:state.temp
  }
}
function mapdispatchtoprops(dispatch,props){
  console.log(props)
  return{

  }
}
export default withRouter(connect(mapstatetoprops,mapdispatchtoprops)( AuthorQuiz));

