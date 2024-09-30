import { ConfigProvider} from 'antd';
import React from 'react';
import { Home } from './Home';
import { OutputProvider } from './contexts/OutputContext';
import { IsSigninProvider } from './contexts/IsSigninContext';

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
    <IsSigninProvider>
    <OutputProvider>
      <Home />
    </OutputProvider>
    </IsSigninProvider>
  </ConfigProvider>
);