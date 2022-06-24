import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { useState } from 'react';
import NavigationBarAdmin from '../Components/NavigationBarAdmin';
  

  const { Header, Sider, Content } = Layout;
  
  const LayoutAdmin = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <NavigationBarAdmin />
        </Sider>
        <Layout className="site-layout">
          <Header >
            
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default LayoutAdmin;