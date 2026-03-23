const AUTH_KEY = 'mediheal_user';

const TEST_ACCOUNTS = [
    { id: 'test', password: 'test1234', name: '테스트유저' },
];

export const loginUser = (id, password) => {
    const account = TEST_ACCOUNTS.find(
        (a) => a.id === id && a.password === password
    );
    if (!account) return false;

    const user = { id: account.id, name: account.name };
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    window.dispatchEvent(new Event('authChange'));
    return true;
};

export const logoutUser = () => {
    localStorage.removeItem(AUTH_KEY);
    window.dispatchEvent(new Event('authChange'));
};

export const getAuthUser = () => {
    try {
        const raw = localStorage.getItem(AUTH_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
};
