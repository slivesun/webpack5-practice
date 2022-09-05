import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount
} from '@/redux/reducers/counter'

export function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span >{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            {/* 这里省略了额外的 render 代码 */}
        </div>
    )
}