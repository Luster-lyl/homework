const defaultState = {
    inputValue:'hahahaha',
    list:[
        'l',
        "o",
        "v",
        "e"
    ]
}  //默认数据



export default (state = defaultState,action)=>{  //就是一个方法函数
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'registerSubmit' ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }


    return state
}