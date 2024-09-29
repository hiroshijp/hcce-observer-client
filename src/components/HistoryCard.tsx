import React from 'react';
import {Card} from 'antd';
import { ExecuteBtn } from './ExecuteBtn';
import { CurlBtn } from './CurlBtn';

interface HistoryCardProps {
    title: string;
}

const actions: React.ReactNode[] = [
    <CurlBtn path='history'/>,
    <ExecuteBtn path='history'/>,
];

export const HistoryCard: React.FC<HistoryCardProps> = ({ title }) => {
    return (
        <Card actions={actions} style={{ minWidth: 300 }}>
        <Card.Meta
          title={title}
          description={
            <>
              <p>This is the description</p>
              <p>This is the description</p>
            </>
          }
        />
      </Card>
    );
};