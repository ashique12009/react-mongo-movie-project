import React from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import { Typography } from '@mui/material';

const Header = () => {
  return (
    <div>
        <div className="header-logo">
            <MovieIcon />
            <Typography variant="span">
                Movies App
            </Typography>
        </div>
        <div className="header-menu">

        </div>
    </div>
  )
}

export default Header;