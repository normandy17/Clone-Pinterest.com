import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Modal, Button } from 'antd';

const SignUp = () => {
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    const handleLogin = () => {
        var a = 1
        if (a == 1) {
            setModalText('The modal will be closed after two seconds');
            setConfirmLoading(true);
            setTimeout(() => {
                setVisible(false);
                setConfirmLoading(false);
            }, 2000);
        }
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal with async logic
      </Button>
            <Modal
                title="Title"
                visible={visible}
                footer={null}
                confirmLoading={confirmLoading}
            >
                <p>{modalText}</p>
                <button onClick={handleLogin}>Login</button>
            </Modal>
        </>
    );
};


export { SignUp }