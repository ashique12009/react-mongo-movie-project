import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { Typography } from '@mui/material';
import LoginDialog from './LoginDialog';
import LoginButton from './LoginButton';

const Header = () => {

    return (
        <AppBar>
            <Toolbar>
                <MovieIcon />
                <Typography>
                    Movies App
                </Typography>
                <LoginDialog />
                <LoginButton />
            </Toolbar>
        </AppBar>
    )
}

export default Header;