import React, { useState } from 'react';
import LoginDialog from './LoginDialog';
import { Button } from '@mui/material';

const LoginButton = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='header-button-container'>
      <Button className='wbutton' style={{marginRight: '5px'}} onClick={() => setOpen(true)}>
        Admin User
      </Button>
      <Button className='wbutton' onClick={() => setOpen(true)}>
        User
      </Button>

      <LoginDialog open={open} setOpen={setOpen} />
    </div>
  )
}

export default LoginButton;