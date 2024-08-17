import { Box, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ account, setAccount }) => {

    const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
    const open = Boolean(dropdownMenuOpen);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setDropdownMenuOpen(event.currentTarget);
    };

    const handleClose = () => {
        setDropdownMenuOpen(null);
    };

    const logout = () => {
        setDropdownMenuOpen(null);
        setAccount({});
        navigate('/');
    }

    return (
        <div>
            <Box style={{ display: 'flex', textAlign: 'center' }}>
                <Typography style={{ marginRight: '5px' }} onClick={handleClick}>
                    {account.email}
                </Typography>
                <Typography>
                    {account.userType}
                </Typography>
            </Box>
            <Menu
                anchorEl={dropdownMenuOpen}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

export default Profile;