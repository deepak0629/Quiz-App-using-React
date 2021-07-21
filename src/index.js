import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Addauthor from './components/addauthor'
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle,sample} from "underscore"
import routes from './router'
import { Router, Route } from 'react-router';
import { Redirect,withRouter } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import Homecomponent from './homecomponent'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
let history = createBrowserHistory()

const authors=[
    {
        name:"deepak",
        imageUrl: "images/tothl.PNG",
        imageSource: "wiki",
        books: ["nasavu nen sasta","nee savu nuv savu","pakodi savu vadu sastadu"]
    },
    {
        name:"deepak",
        imageUrl: "images/pikachu.jpg",
        imageSource: "wiki",
        books: ["nasavu "," savu  savu"," savu  "]
    },
    {
        name:"deepak",
        imageUrl: "images/toothless.PNG",
        imageSource: "wiki",
        books: [" nen ","nee  savu"," vadu sastadu"]
    },
    {
        name:"deepak",
        imageUrl: "images/pikachu by meenu.jpg",
        imageSource: "wiki",
        books: [" nen sasta"," savu","pakodi  vadu "]
    }
]


// var temproute= withRouter(({history})=>{
//     history.push("/")
// }) 

withRouter(Addauthor) // if this is there by default it received a history param


function reducer(state={Turndata: getTurndata(authors),
    addauthor:addauthor,temp:1,temp1:1},action){
        console.log("reducer invoked")
        console.log("state is "+JSON.stringify( state))
        switch(action.type){
            case 'ADD_AUTHOR':addauthor(action.statee,action.history) ;return Object.assign({},state,{
                Turndata: getTurndata(authors),
        addauthor:addauthor,temp:state.temp+1
            });
            default:return state;
        }
}
var store=Redux.createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function addauthor(values,history){
    console.log(values)
    authors.push(values)
    // temproute()
    history.push("/")
    
}

function getTurndata(authors){
    console.log("turn data invoked")
    var allbooks=authors.reduce((p,c,i)=>{
        return p.concat(c.books)
    },[])
    var fourrandombooks=shuffle(allbooks).slice(0,2)
    
    const answer=sample(fourrandombooks)
    return{
        books:fourrandombooks,
        author:authors.find((author)=>author.books.some((title)=>title===answer))
    }
}



var changestate=function (){
    return (state={
        Turndata: getTurndata(authors),
        addauthor:addauthor
    })
    
}
var state=changestate()
// Router.run(routes,function(handler){
    
function render(){
    ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <Router history={history}  >
          <Route  path="/" component={()=><Homecomponent {...state} statechnage={changestate} renderr={render}/>} />
          {/* <Route path="/" component={()=><AuthorQuiz {...state}/> }/> */}
        </Router>
    </ReactRedux.Provider>
    // <Homecomponent {...state}/>
      , document.getElementById('root'));
}
render()
    // ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));
// })

// ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
