
import { combineReducers } from 'redux';
import counter from './counter';
import objch from './objch';

export default combineReducers({// 导出所有 reducer
    // 这会单独调用每个 slice reducer，传入 Redux 状态的特定切片，并将每个返回值包含在最终的新 Redux 状态对象中。
    // Redux 有一个名为 combineReducers 的函数，它会自动为我们执行此操作。
    // 它接受一个全是 slice reducer 的对象作为其参数，并返回一个函数，该函数在调度操作时调用每个 slice reducer。
    // 每个 slice reducer 的结果都组合成一个对象作为最终结果。
    objch,
    counter
})

