const defaultState = {
    inputValue: 'hahahaha',
    list: [
        'l',
        "o",
        "v",
        "e"
    ],
    ifLogin: false,
    name: "",
    currentTeacher:'',
    email: "",
    passwrd: "",
    subjectList: ['高数', '线代', '大物', '英语', '概率论', '复变函数', '单片机',],
    teacherList: [{ name: '赵楚楚', college: '通信', class: ['01011801', '01011802'] }, { name: '顾明', college: '计算机', class: ['01011801', '01011802'] }, { name: '赵楚', college: '通信', class: ['01011801', '01011802'] }, { name: '顾明', college: '计算机', class: ['01011801', '01011802'] },],

}  //默认数据



export default (state = defaultState, action) => {  //就是一个方法函数
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        switch (action.detail) {
            case "name": newState.name = action.value
                break;
            case "email": newState.email = action.value
                break;
            case "password": newState.passwrd = action.value

        }

        return newState
    }
    if (action.type === 'registerSubmit') { //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if (action.type === 'loginSubmit'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.ifLogin = action.value
        return newState
    }
    if(action.type === 'searchTeacher'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.currentTeacher = action.name
        return newState
    }


    return state
}