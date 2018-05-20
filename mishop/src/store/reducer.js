const reducer=(state,{type,payload})=>{
    // console.log('reducer',type,payload)
    switch(type){
        case 'SHOW_HOME_DATA':
            return Object.assign({},state,{Product:payload})
            break;
        default:
            return state
    }
    return state
};

export default reducer