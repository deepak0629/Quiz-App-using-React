import React,  {Component } from 'react';
import { Router, Route,Switch } from 'react-router'; 
import Addbook from './components/addbook'
import AuthorQuiz from './AuthorQuiz';
import Addauthor from './components/addauthor'
import createBrowserHistory from 'history/createBrowserHistory'
import Noroutefound from './components/noroutefound'
let history = createBrowserHistory()
var IndexRoute=Router.IndexRoute
class homecomponent extends Component{
    render(){
        console.log(this.props)
        // var temp=
        return(
            <div>
                hidfhtughrugrg
                {/* {this.props.children} */}
                {/* {React.cloneElement(this.props.children,{})} */}
                <Router history={history}>
                <React.Fragment>
                    <Switch>
                        <Route exact  path="/"  component={()=><AuthorQuiz {...this.props} oncontinue={()=>{this.props.statechnage();this.props.renderr()}}/> }/>
                        <Route   path="/addauthor/" component={(props)=><Addauthor {...this.props} {...props}/>}/>
                        <Route path="*" component={()=><Noroutefound/>}></Route>
                    </Switch>
                    </React.Fragment>
                </Router>
            </div>
        )
    }
}

export default homecomponent;