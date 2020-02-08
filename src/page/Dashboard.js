import React from 'react';
import Axios from 'axios';
import { Layout, Menu, Breadcrumb, Dropdown, Icon, Typography } from 'antd';
import '../component/styles/style.css';
import 'antd/dist/antd.css';
import TableRole from './TableRole';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const Dashboard = props => {
    const handleLogout = async e => {
        const token = localStorage.getItem('token');
        await Axios.post('http://api.smarthealthy.co.id//auth/logout',
        {
          headers : { 
            'Authorization' : `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'api-key': 'AQIS83nanwPd12sTWM0T2GQSSadQvaHLGBb'
        }
        }).then(response=> console.log(response),
            // localStorage.removeItem('token'),
            props.history.push('/')
        )
      }

    const menu = (
        <Menu className="menu-dropdown">
          <Menu.Item key="1" onClick={handleLogout} >
            <Icon type="logout"/>
            Logout
          </Menu.Item>
        </Menu>
      );

    return (
        <Layout className="layout">
            <Header>
            <div className="logo">
                <Text>Test-Live</Text>
            </div>
            <Dropdown overlay={menu} trigger={['click']}>
                <div className='header-icon'>
                    <Icon type='user'/>
                    <Text style={{ color: '#fff'}}> Admin </Text>
                </div>
            </Dropdown>
            </Header>
            <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <TableRole/>
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>

    )
}

export default Dashboard;