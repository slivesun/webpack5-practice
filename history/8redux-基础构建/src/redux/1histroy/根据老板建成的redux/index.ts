import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducer';
export interface State { [propName: string]: any; }
export interface Action extends State { type: string }
export default configureStore({//创建 redux store 状态
    reducer: rootReducer
})