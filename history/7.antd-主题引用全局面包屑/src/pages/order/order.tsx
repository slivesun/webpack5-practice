import React, { useEffect } from 'react'
import { useSetState } from 'ahooks'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
interface State { }
const Page = () => {
    const navigate = useNavigate();
    const [state, setState] = useSetState<State>({

    })
    useEffect(() => {

    }, [])
    return (
        <div className='' >
            订单列表
            <Button
                type='primary'
                onClick={() => {
                    navigate('/order/234234')
                }}
            >去详情</Button>
        </div>
    )
}
export default Page