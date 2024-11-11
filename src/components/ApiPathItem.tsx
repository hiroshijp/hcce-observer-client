import React from 'react';
import { Flex } from 'antd';
import { ExecuteBtn } from './ExecuteBtn';
import { CurlBtn } from './CurlBtn';

interface ApiPathItemProps {
    path: string;
    enable: boolean;
}

export const ApiPathItem: React.FC<ApiPathItemProps> = ({
  path, 
  enable
}) => {
  return (
    <>
        {path}
        <Flex gap={"small"}>
            <CurlBtn title={"curl"}/>
            <ExecuteBtn title={"exec"} path={path} enable={enable}/>
        </Flex>
    </>
  );
};