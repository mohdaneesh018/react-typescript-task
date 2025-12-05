import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { AuthContextType } from "../types/auth";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback((email: string, password: string) => {
        if (email === "test@example.com" && password === "123456") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid credentials!");
        }
    }, []);

    const logout = useCallback(() => setIsLoggedIn(false), []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)!;
