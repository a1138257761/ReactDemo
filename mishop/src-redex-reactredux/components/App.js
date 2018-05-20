import React, {Component} from 'react';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    let {list,add,asyncAdd} = this.props;
    return (
      <div>
        <h3>redux 5.x</h3>
        <input type="text" ref="ipt"/>
        <input type="button" value="添加" onClick={()=>{add(this.refs.ipt.value)}}/>
        <input type="button" value="异步添加" onClick={()=>{asyncAdd(this.refs.ipt.value)}}/>
        <ul>
          {
            list.map((value,index)=>{
              return <li key={index}>{value}</li>
            })
          }
        </ul>
      </div>
    )
  }
}


const mapStatetoProps=(state,ownProps)=>({
  list:state.list
});

const mapDispathToProps=(dispatch,ownProps)=>({
  add:(arg)=>{
    console.log('add',arg);
    dispatch({type:'ADD_ITEM', payload:arg})
  },
  asyncAdd:(arg)=>{
    setTimeout(()=>{
      dispatch({type:'ADD_ITEM', payload:arg})
    },1000)
  }
});



//容器组件，负责链接store和app
// const Container=connect()(App);
// export default Container;

export default connect(
  mapStatetoProps,
  mapDispathToProps
)(App);
