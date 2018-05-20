
// const reducer = (state,action) => {
const reducer = (state,{type,payload}) => {
  switch (type){
    case 'ADD_ITEM':
      //处理业务逻辑的
      return Object.assign({},state,{list:state.list.concat(payload)});
    case 'ADD_ITEM2':
      //....
      break;
    case 'ADD_ITEM3':
      //....
      break;
    default:
      return state
  }
};

export default reducer;