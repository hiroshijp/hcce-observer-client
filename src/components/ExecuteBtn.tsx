import { Button } from 'antd';
import React from 'react';

interface ExecuteBtnProps {
    path: string;
}

 export const ExecuteBtn: React.FC<ExecuteBtnProps> = ({path}) => {
    return (
        <Button type="primary">
            {path}
        </Button>
    );
};