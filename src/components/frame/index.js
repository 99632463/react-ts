import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {withRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.less';
import logo from './logo.png';

const { Header, Content, Sider } = Layout;

class Frame extends React.Component{

  onMenu = ({ key }) => {
    this.props.history.push(key)
  }

  render(){
    const {myRouter} = this.props;

    return <Layout>
    <Header className="header">
      <div className="logo">
        <img src={logo} alt='logo'/>
      </div>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          selectedKeys={[this.props.location.pathname]}
          onClick={this.onMenu}
          style={{ height: '100%', borderRight: 0 }}
        >
          {
            myRouter.map(router => {
              return <Menu.Item key={router.pathname}>
                <Icon type={router.icon}/>
                {router.title}
              </Menu.Item>;
            })
          }
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {this.props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>;
  }
}

export default withRouter(Frame);