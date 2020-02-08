import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import '../component/styles/style.css';
import 'antd/dist/antd.css';
import Axios from 'axios';

const { Text } = Typography;

const LoginForm = (props) =>{
    const { getFieldDecorator } = props.form;
    const handleSubmit = async(e) => {
        e.preventDefault();
        props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                await Axios.post('http://api.smarthealthy.co.id//auth/login',
                {
                    email : values.email,
                    password : values.password
                })
                .then(response => 
                    localStorage.setItem('token', response.data.data.auth_token),
                    props.history.push('/dashboard'),
                )
            }
        });
    };

    return (
        <div className='login-form'>
            <Text>Welcome</Text>
            <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
                })(
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="email"
                />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a className="login-form-forgot" href="">
                Forgot password
                </a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>
            </Form>
        </div>
    )
}
const Login = Form.create({ name: 'normal_login' })(LoginForm);
export default Login;