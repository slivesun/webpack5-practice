import React, { useEffect } from 'react'
import { useSetState } from 'ahooks'
import { Input, message, Modal } from 'antd'
import Axios from 'axios'
interface State {
    name: string
    info: string
    job: string
    color: string
}
const AddModal = (props: { onCancel: (type?: boolean) => void }) => {
    const [state, setState] = useSetState<State>({
        name: '',
        info: '',
        job: '',
        color: '',
    })
    useEffect(() => {

    }, [])
    const submit = () => {
        Axios.post('/api/users', {
            ...state,
        }).then((res: any) => {
            if (res.code == 200) {
                props.onCancel(true)
                message.success('添加成功')
            } else {
                message.error(res.message)
            }
        })
    }
    return (
        <Modal
            title='新增用户'
            visible={true}
            onOk={() => { submit() }}
            onCancel={() => { props.onCancel() }}
        >
            <div className='item'>
                <span>姓名：</span>
                <Input
                    value={state.name}
                    onChange={(e) => {
                        setState({ name: e.target.value })
                    }}
                ></Input>
            </div>
            <div className='item'>
                <span>职位：</span>
                <Input
                    value={state.job}
                    onChange={(e) => {
                        setState({ job: e.target.value })
                    }}
                ></Input>
            </div>
            <div className='item'>
                <span>颜色：</span>
                <Input
                    value={state.color}
                    onChange={(e) => {
                        setState({ color: e.target.value })
                    }}
                ></Input>
            </div>
            <div className='item'>
                <span>介绍：</span>
                <Input.TextArea
                    value={state.info}
                    onChange={(e) => {
                        setState({ info: e.target.value })
                    }}
                ></Input.TextArea>
            </div>
        </Modal>
    )
}
export default AddModal