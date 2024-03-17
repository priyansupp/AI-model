import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const name = 'Riya';
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, name }}>
            { children }
        </AuthContext.Provider>
    );
}

