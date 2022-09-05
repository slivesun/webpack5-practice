import { configureStore } from '@reduxjs/toolkit'
interface State { [propName: string]: any; }
const initialState: State = { value: '123', ko: '456' }
interface Action extends State {
    type: string
}
const addTodoAction: Action = {
    type: 'a',
    value: 'eqweqweqweqwe',
    ko: '456',
    asd:'ddd'
}
const addTodo = (text: any) => {//action creator 是一个创建并返回一个 action 对象的函数。它的作用是让你不必每次都手动编写 action 对象
    return {
        type: 'todos/todoAdded',
        payload: text
    }
}
function counterReducer(state: State = initialState, action: Action): State {
    let obj: State = JSON.parse(JSON.stringify(action))
    delete obj.type
    // 检查 reducer 是否关心这个 action
    if (action.type === 'a') {
        // 如果是，复制 `state`
        return {
            ...obj,
            // 使用新值更新 state 副本
            // value: state.value + 1
        }
    }
    // 返回原来的 state 不变
    return state
}
const store = configureStore({//创建 redux store 状态
    reducer: counterReducer
})
store.getState();//获取状态
console.log(store.getState(), 'store.log redux根文件')
store.dispatch(addTodoAction)
console.log(store.getState(), 'store.log redux根文件2')
// Selector 函数可以从 store 状态树中提取指定的片段。随着应用变得越来越大，会遇到应用程序的不同部分需要读取相同的数据，selector 可以避免重复这样的读取逻辑：
const selectCounterValue = (state: State) => state.value
const currentValue = selectCounterValue(store.getState())
console.log(currentValue,'selectCounterValue 我是被读取的state中的value')
export default store