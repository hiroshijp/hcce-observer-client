import { ConfigProvider, Space } from 'antd';
import React from 'react';
import { Home } from './Home';

export const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
    }}
  >
    <Space>
      <Home />
    </Space>
  </ConfigProvider>
);