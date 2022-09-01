import React, { useEffect } from 'react'
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import { useSetState } from 'ahooks';
import './login.scss';
import { useNavigate } from 'react-router-dom'
interface State { }
const Page = () => {
    let navigate = useNavigate()
    const [state, setState] = useSetState<State>({
    })

    useEffect(() => {

    }, [])

    const onFinish = (values: any) => {
        console.log('Success:', values);
        navigate('/home')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='login' >
            <div className='wrap'>
                <div className='dl'>登陆</div>
                <Form
                    className='form_l'
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"

                >
                    <Row justify='start'>
                        <Col span={24}>
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[{ required: true, message: '请输入用户名!' }]}
                            >
                                <Input placeholder='请输入' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[{ required: true, message: '请输入密码!' }]}
                            >
                                <Input.Password placeholder='请输入' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify='start'>
                        <Col offset={0} span={8}>
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify='start'>
                        <Col offset={0} span={24}>
                            <Form.Item>
                                <Button style={{ width: '100%', height: '40px' }} type="primary" htmlType="submit">
                                    登陆
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
export default Page