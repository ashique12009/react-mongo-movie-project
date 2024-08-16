import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import Login from './login/Login';
import SignUp from './login/SignUp';

const LoginDialog = ({ open = false, setOpen }) => {

    const [loginSignUp, setLoginSignUp] = useState(true);

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            {
                loginSignUp
                    ? <Login setLoginSignUp={setLoginSignUp} setOpen={setOpen} />
                    : <SignUp setLoginSignUp={setLoginSignUp} setOpen={setOpen} />
            }
        </Dialog>
    )
}

export default LoginDialog;