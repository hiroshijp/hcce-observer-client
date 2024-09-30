import { useContext} from 'react';
import { Button } from 'antd';
import { OutputContext } from '../contexts/OutputContext';


interface ExecuteBtnProps {
    title: string;
    path: string;
    enable: boolean;
}

 export const ExecuteBtn: React.FC<ExecuteBtnProps> = ({title, path, enable}) => {
    const {setOutput} = useContext(OutputContext);
    const handleClick = () => {
        fetch('http://localhost:8080/api'+ path)
        .then((res) => res.json())
        .then((json) => setOutput(JSON.stringify(json, null, 4)))
        .catch(() => alert("error"));
    }
    console.log(enable);
    return (
        <Button type="primary" onClick={handleClick} disabled={!enable}>
            {title}
        </Button>
    );
};