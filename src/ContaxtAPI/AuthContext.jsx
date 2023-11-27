import React, { createContext, useState } from 'react';
export const ContextAPI = createContext()
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const poem = 'salat'
    const ShareData = {
        user,
        setUser,
        poem
    }
    return (
        <ContextAPI.Provider value={ShareData}>
            {children}
        </ContextAPI.Provider>
    );
};

export default AuthContext;