import React from 'react';
import { Dialog } from '@mui/material';

const LoginDialog = ({ open = false, setOpen }) => {

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
        <div>LoginDialog</div>
    </Dialog>
  )
}

export default LoginDialog;