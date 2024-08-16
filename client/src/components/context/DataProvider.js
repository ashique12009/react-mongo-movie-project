import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({children}) => {

    const [account, setAccount] = useState({});

    return (
        <DataContext.Provider>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;