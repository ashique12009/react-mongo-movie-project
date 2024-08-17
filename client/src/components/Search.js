import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const searchInputStyle = {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '5px',
    marginLeft: '20px',
    border: '2px solid black',
    padding: '1px 10px',
}

const SearchIconStyle = {
    color: 'black',
}

const Search = ({setSearchInput}) => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <InputBase placeholder="Search by movie name..." style={searchInputStyle} onChange={(e) => setSearchInput(e.target.value)} />
                <SearchIcon style={SearchIconStyle} />
            </div>
        </div>
    )
}

export default Search;