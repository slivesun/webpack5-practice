import React, { useEffect } from 'react'
import { useSetState } from 'ahooks'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';
interface State { }
const Page = () => {
    const navigate = useNavigate();
    const [state, setState] = useSetState<State>({

    })
    useEffect(() => {

    }, [])
    return (
        <div className='' >
            订单详情页
            <Button
                type='primary'
                onClick={() => {
                    navigate(-1)
                }}
            >返回</Button>
        </div>
    )
}
export default Page