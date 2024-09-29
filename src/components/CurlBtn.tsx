import { Button } from 'antd';
import React from 'react';

interface CurlBtnProps {
    path: string;
}

 export const CurlBtn: React.FC<CurlBtnProps> = ({path}) => {
    return (
        <Button>
            {path}
        </Button>
    );
};