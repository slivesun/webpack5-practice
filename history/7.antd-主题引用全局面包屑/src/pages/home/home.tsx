import React, { useEffect } from 'react'
import { useSetState } from 'ahooks'
interface State { }
const Home = () => {
    const [state, setState] = useSetState<State>({

    })
    useEffect(() => {

    }, [])
    return (
        <div className='' >
            home
        </div>
    )
}
export default Home