import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount
} from '@/redux/reducers/counter'
import objch, { a } from '@/redux/reducers/objch';

export default function Counter() {
    const count = useSelector(selectCount)
    const bf = useSelector(a)
    const dispatch = useDispatch()




    const [incrementAmount, setIncrementAmount] = useState('2')

    // later
    return (
        <div>
            <span >{JSON.stringify(count)}</span><br/>
            <span >{JSON.stringify(bf)}</span>
            <input
                aria-label="Set increment amount"
                value={incrementAmount}
                onChange={e => setIncrementAmount(e.target.value)}
            />
            <button
                // onClick={() => dispatch(objch({value:1,type:'sad'},{type:'objch'}))}
            >
                aabsssd
            </button>
            <button
                onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
            >
                Add Amount
            </button>
            <button
                onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0) as any)}
            >
                Add Async
            </button>
        </div>
    )



    // return (
    //     <div>
    //         <div>
    //             <button
    //                 aria-label="Increment value"
    //                 onClick={() => dispatch(increment())}
    //             >
    //                 +
    //             </button>
    //             <span >{count}</span>
    //             <button
    //                 aria-label="Decrement value"
    //                 onClick={() => dispatch(decrement())}
    //             >
    //                 -
    //             </button>
    //         </div>
    //         {/* 这里省略了额外的 render 代码 */}
    //     </div>
    // )
}