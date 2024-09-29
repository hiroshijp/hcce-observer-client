import React from 'react';
import { Flex } from 'antd';
import { HistoryCard } from './components/HistoryCard';
import { SigninModal } from './components/SigininModal';

export const Home: React.FC = () => {
  const  isSignin = false;
  return (
    <>
      {!isSignin && <SigninModal/>}
      <Flex gap="middle" align="start" vertical>
        <HistoryCard title="History" />
        <HistoryCard title="History with num" />
      </Flex>
    </>
  );
};