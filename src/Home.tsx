import React , { useContext } from 'react';
import { Layout, List } from 'antd';
import { ApiPathItem } from './components/ApiPathItem';
import { SigninModal } from './components/SigininModal';
import { StatusFloatBtn } from './components/StatusFloatBtn';
import { SideConsole } from './components/SideConsole';
import { OutputContext } from './contexts/OutputContext';
import { IsSigninContext } from './contexts/IsSigninContext';
import { paths } from './data/api-path';

const { Sider, Content } = Layout;

export const Home: React.FC = () => {
  const  {isSignin} = useContext(IsSigninContext);
  const {output} = useContext(OutputContext);
  return (
    <>
    {!isSignin && <SigninModal />}
    <Layout>
      <Content style={contentStyle}>
      <List
      dataSource={paths}
      renderItem={(item) => (
        <List.Item>
          <ApiPathItem path={item.path} enable={item.enable}/>
        </List.Item>
      )}
      />
      </Content>
      <Sider width="40%" style={siderStyle}>
        <SideConsole output={output} />
      </Sider>
    </Layout>
    <StatusFloatBtn /> 
    </>
  );
};

// const apiPathData = Array.from({ length: 100 }).map((_, i) => `/api/private/history/${i + 1}`);

const contentStyle: React.CSSProperties = {
  maxHeight: '100vh',
  overflow: 'auto',
  padding: 10
};

const siderStyle: React.CSSProperties = {
  backgroundColor: '#f6ffed',
  color: 'black',
  maxHeight: '100vh',
  overflow: 'auto'
};