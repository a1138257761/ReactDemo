import React, { Component } from 'react';
import loadable from 'react-loadable'
import {Redirect,Route,Switch} from "react-router-dom"
import Reg from './Reg'
import {connect} from 'react-redux'
import Home from './Home'
import GoodsCar from './GoodsCar'
import Detail from "./Detail";
import User from './User'
import Child from "./Child";


let Login = loadable({loader:()=> import('./Login'),loading:()=>{return null}})
// import Login from './Login'


class App extends Component {
  render() {



    return (
        <div>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/reg' component={Reg}/>
                <Route path='/goodscar' component={GoodsCar}/>
                <Route path='/detail/:id' component={Detail}/>
                <Route path='/child' component={Child}/>
                <Route path='/user' component={User}/>
                <Redirect from='/' to='/home' />
            </Switch>
            {/*<FootBar/>*/}
        </div>

    );
  }
}

//定义纯函数
const mapStateToProps = state =>({
    bFoot:state.bFoot,
    bLoading:state.bLoading,
    product:state.product
})
const mapDispatchToProps = dispatch =>({

})


//connect()函数接收2个参数
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
