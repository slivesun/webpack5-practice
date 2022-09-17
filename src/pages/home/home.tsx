
import { Badge, Button, Card, message, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import AddModal from './modal/add';
import './home.scss';
const Home = () => {
    let [userData, setUserData] = useState<any[]>([])
    let [isModal, setIsModal] = useState<boolean>(false)
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        Axios.get('/api/users').then((res: any) => {
            if (res.code == 200) {
                setUserData(res.data)
            } else {
                console.log(res, 'res')
                message.error(res.message)
            }
        })
    }
    return (
        <div className='home' style={{ padding: '10px' }}>
            <div className='top'>
                <h2>用户列表</h2>
                <div>
                    <Button
                        className='btn'
                        type='primary'
                        onClick={() => {
                            setIsModal(true)
                        }}
                    >新增</Button>
                    <Button
                        className='btn'
                        type='primary'
                        onClick={() => {
                            Axios.get('/test.jpg').then((res: any) => {

                            })
                        }}
                    >查看图片</Button>
                </div>
            </div>
            <div className='bottom'>
                {
                    !userData.length ? <div className='loding'><Spin></Spin></div> :
                        userData.map((item, index) => {
                            return <Badge.Ribbon key={index} text={item.job} color={item.color}>
                                <Card className='list' title={item.name} size='default' style={{ color: item.color }}>
                                    {item.info}
                                </Card>
                            </Badge.Ribbon>
                        })
                }
            </div>
            {
                isModal && (
                    <AddModal
                        onCancel={(type?: boolean) => {
                            if (type) {
                                getData()
                            }
                            setIsModal(false)
                        }}
                    />
                )
            }
        </div>
    )
}
export default Home