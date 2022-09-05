
import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
console.log('increment()是', increment(),)
console.log(counterSlice.reducer({ value: 3 }, increment), '3+1')
console.log('action/incrementByAmount是', incrementByAmount(5))
console.log(counterSlice.reducer({ value: 3 }, incrementByAmount(123)), '3+123')

export default counterSlice.reducer
export const incrementAsync = (amount: any) => (dispatch: (arg0: { payload: any; type: string }) => void) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
        console.log(incrementByAmount(5))
    }, 1000)
}
incrementAsync(40)
console.log(incrementByAmount(5))
export const selectCount = (state: { counter: { value: any } }) => state.counter.value
