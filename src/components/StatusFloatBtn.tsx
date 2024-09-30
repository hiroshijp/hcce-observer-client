import React, { useContext }from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { OutputContext } from '../contexts/OutputContext';

export const StatusFloatBtn: React.FC = () => {
    const { setOutput } = useContext(OutputContext);
    const handleClicked = () =>{
        setOutput("clicked")
    }
    return(
    <FloatButton 
        icon={<QuestionCircleOutlined />} 
        type="primary" 
        onClick={handleClicked}
    />
    );
}
