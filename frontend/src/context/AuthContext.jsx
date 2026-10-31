import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContextDef';
import { apiGetMe } from '../api';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [loading, setLoading] = useState(true);

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    useEffect(() => {
        const fetchUser = async () => {
            if (token) {
                const data = await apiGetMe(token);
                if (data.success) setUser(data.user);
                else logout();
            }
            setLoading(false);
        };
        fetchUser();
    }, [token]);

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
