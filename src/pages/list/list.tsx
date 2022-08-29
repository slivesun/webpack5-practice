import React, { useEffect } from 'react'
import { useSetState } from 'ahooks'
interface State { }
const List = () => {
    const [state, setState] = useSetState<State>({
        
    })
    useEffect(() => {
         
    }, [])
    return (
        <div className='' >
             list
        </div>
    )
}
export default List