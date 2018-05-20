import React, {Component} from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[]
    };

    //订阅公共状态(store)
    console.log('constructor',this.props.store.getState());

    this.state=this.props.store.getState();

    props.store.subscribe(()=>{
      // console.log('状态变化了');
      this.setState(this.props.store.getState());
    })
  }
  render() {
    return (
      <div>
        <h3>redux 5.x</h3>
        <input type="text" ref="ipt"/>
        <input type="button" value="添加" onClick={this.send.bind(this)}/>
        <input type="button" value="异步添加" onClick={this.asyncAdd.bind(this)}/>
        <ul>
          {
            this.state.list.map((value,index)=>{
              return <li key={index}>{value}</li>
            })
          }
        </ul>
      </div>
    )
  }
  send(){
    // this.props.store.dispatch({type:类型,payload:负载数据})  发送action
    this.props.store.dispatch({type:'ADD_ITEM',payload:this.refs.ipt.value})

  }
  asyncAdd(){
    /*fetch(url).then(
      res=>res.json()
    ).then(
      data => this.props.store.dispatch({type:'ADD_ITEM',payload:{a:data,b:this.refs.ipt.value}})
    )*/
    let val = this.refs.ipt.value;
    setTimeout(()=>{
      this.props.store.dispatch({type:'ADD_ITEM',payload:val})
    },1000);

  }
}

export default App;
