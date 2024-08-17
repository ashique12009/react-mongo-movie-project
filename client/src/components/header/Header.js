import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { Typography } from '@mui/material';
import LoginDialog from './LoginDialog';
import LoginButton from './LoginButton';
import Search from '../Search';

const Header = ({setSearchInput}) => {

    return (
        <AppBar>
            <Toolbar>
                <MovieIcon />
                <Typography>
                    Movies App
                </Typography>
                <Search setSearchInput={setSearchInput} />
                <LoginDialog />
                <LoginButton />
            </Toolbar>
        </AppBar>
    )
}

export default Header;