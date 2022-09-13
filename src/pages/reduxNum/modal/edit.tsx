import React, { useEffect } from 'react'
import { useSetState } from 'ahooks'
import { Input, Modal } from 'antd'
import { StateT, putPsts } from '@/redux/reducers/posts/postsSlice';
import { useDispatch, useSelector } from 'react-redux';

interface State extends StateT { }
const EidtModal = (props: { content: string, title: string, id: string, cancel: () => void }) => {
    const dispatch = useDispatch()
    const counter = useSelector((state: any) => state.counter);//获取state
    const [state, setState] = useSetState<State>({
        id: null,
        title: null,
        content: null
    })
    useEffect(() => {
        setState({
            id: props.id,
            title: props.title,
            content: props.content,
        })
    }, [])
    return (
        <Modal
            visible={true}
            title='编辑'
            onOk={() => {
                props.cancel()
                dispatch(putPsts({
                    ...state
                }))
            }}
            onCancel={() => {
                props.cancel()
            }}
        >
            另一个reducer切片处理的数据  {counter.value}
            <Input
                value={state.title}
                onChange={(e) => {
                    setState({
                        title: e.target.value,
                    })
                }}
            ></Input>
            <Input
                value={state.content}
                onChange={(e) => {
                    setState({
                        content: e.target.value,
                    })
                }}
            ></Input>
        </Modal>
    )
}
export default EidtModal