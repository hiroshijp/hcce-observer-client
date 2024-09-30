import React from 'react';
import { Input } from 'antd';

interface SideConsoleProps {
    output: string;
}

const style: React.CSSProperties = {
    fontSize: 15,
    fontWeight: 'lighter',
  };

export const SideConsole: React.FC<SideConsoleProps> = ({output}) => {
    return (
        <>
            <Input.TextArea
                value={output}
                autoSize={{ minRows:50}}
                readOnly
                style={style}
            >
            </Input.TextArea>
        </>
    );
};
