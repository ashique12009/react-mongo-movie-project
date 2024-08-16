import React, { useContext, useState } from 'react';
import LoginDialog from './LoginDialog';
import { Button } from '@mui/material';
import { DataContext } from '../context/DataProvider';

const LoginButton = () => {

    const [open, setOpen] = useState(false);

    const {account, setAccount} = useContext(DataContext);

    const adminDialog = () => {
        setAccount({userType: "admin"});
        setOpen(true);
    }

    const userDialog = () => {
        setAccount({userType: "user"});
        setOpen(true);
    }

    return (
        <div className='header-button-container'>
            <Button className='wbutton' style={{ marginRight: '5px' }} onClick={adminDialog}>
                Admin User
            </Button>
            <Button className='wbutton' onClick={userDialog}>
                User
            </Button>

            <LoginDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default LoginButton;