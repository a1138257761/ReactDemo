const asyncAction = (dispatch,url,cred,type)=>{
    fetch(url,cred).then(
      res=>res.json()
    ).then(
        data=>{
            console.log(data)
            dispatch({type:'SHOW_HOME_DATA',payload:data})//状态请求
      }
    )
    // return  dispatch({type:'SHOW_HOME_DATA',payload:true})//状态请求
}
export default asyncAction;