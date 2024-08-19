import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const FilterSort = ({sort, setSort}) => {

    const changeHandle = (e) => {
        setSort(e.target.value);
    }

    return (
        <div style={{marginTop: '20px'}}>
            <h4>Sort by Year/Rating</h4>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        label="Age"
                        onChange={changeHandle}
                    >
                        <MenuItem value={""}>None</MenuItem>
                        <MenuItem value={"rating"}>Rating</MenuItem>
                        <MenuItem value={"year"}>Year</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default FilterSort;