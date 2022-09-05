
import { State, Action } from '../index';

const initialState: State = {}
export default function counter(state: State = initialState, action: Action): State {
    // 检查 reducer 是否关心这个 action
    if (action.type === 'cu') {
        // 如果是，复制 `state`
        return {
            ...state,
            // 使用新值更新 state 副本
            value: state.value + 1
        }
    }
    // 返回原来的 state 不变
    return state
}
