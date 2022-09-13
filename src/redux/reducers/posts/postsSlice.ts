import { createSlice, nanoid } from '@reduxjs/toolkit';//引入 toolkit 切片
export interface StateT {
    id: string,
    title: string,
    content: string
}
// 初始数据
const initialState: StateT[] = [
]

const postsSlice = createSlice({//创建切片
    name: 'posts',//切片名称
    initialState,//数据
    reducers: {//reducer逻辑
        postAddedd: {
            reducer(state, action: any) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        },
        postAdded: (state, action: { type: string, payload: StateT }) => {
            state.push(action.payload)
        },
        postdelate: (state, action: { type: string, payload: string }) => {
            state.forEach((item, index) => {
                if (item.id == action.payload) {
                    state.splice(index, 1)
                }
            })
        },
        putPsts: (state, action: { type: string, payload: StateT }) => {
            state.forEach((item, index) => {
                if (item.id == action.payload.id) {
                    state[index] = action.payload
                }
            })
        }
    }
})
export let { postAdded, postdelate, putPsts, postAddedd } = postsSlice.actions
export default postsSlice.reducer  