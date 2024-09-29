import {useState} from 'react';
import {Modal, Form, Input, Button} from 'antd';
import { FormProps } from 'antd';

// const req = (name: string, password: string)=>{
//     const credentials = btoa(`${name}:${password}`);
//     fetch('http://127.0.0.1:8080', {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             'Authorization': `Basic ${credentials}`,
//             'Content-Type': 'text/plain'
//         }
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
// }

const getData = async (name: string, password: string) => {
    try {
      const res = await fetch('http://localhost:8080/signin', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Authorization': `Basic ${btoa(`${name}:${password}`)}`,
            'Content-Type': 'text/plain'
        }
      })
      if (!res.ok) {
        throw `failed: ${res.status}`;
      }
      console.log(res);
    } catch (err: unknown) {
      console.error(err);
    }
  }

type SigninFieldType = {
    username : string;
    password: string;
}

export const SigninModal: React.FC = () => {
    const [isSignin, setIsSignin] = useState(false);
    const onFinish: FormProps<SigninFieldType>['onFinish'] = (values) => {
        getData(values.username, values.password);
        setIsSignin(true);
    };
    return (
        <Modal
          open={!isSignin}
          closable={false}
          footer={null}
        >  
            <Form
              onFinish={onFinish}
            >
                <Form.Item<SigninFieldType>
                  name="username"
                >
                    <Input/>
                </Form.Item>
                <Form.Item<SigninFieldType>
                  name="password"
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Signin</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
};