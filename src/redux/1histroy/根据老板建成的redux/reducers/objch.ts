import { State, Action } from '../index';
const initialState: State = {}
export default function objch(state: State = initialState, action: Action): State {
    let obj: State = JSON.parse(JSON.stringify(action))
    delete obj.type
    // 检查 reducer 是否关心这个 action
    if (action.type === 'ob') {
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