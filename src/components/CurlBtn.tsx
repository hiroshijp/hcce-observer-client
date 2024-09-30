import { Button } from 'antd';
import React from 'react';

interface CurlBtnProps {
    title: string;
}

 export const CurlBtn: React.FC<CurlBtnProps> = ({title}) => {
    return (
        <Button>
            {title}
        </Button>
    );
};