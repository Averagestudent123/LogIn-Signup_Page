const BASE_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'}/auth`;

export const apiSignup = async (data) => {
    const res = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const apiLogin = async (data) => {
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const apiGetMe = async (token) => {
    const res = await fetch(`${BASE_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
};

