import React, { useEffect } from 'react'
import { useSetState } from 'ahooks'
interface State { }
const Page = () => {
    const [state, setState] = useSetState<State>({

    })
    useEffect(() => {

    }, [])
    return (
        <div className='' >
            财务报表
        </div>
    )
}
export default Page