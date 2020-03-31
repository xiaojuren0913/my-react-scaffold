const getItem = (key: string) => {
    return localStorage.getItem(key) || '';
}

export const setToken = (token: string) => {
    localStorage.setItem('TOKEN', token);
}

export const getToken = () => {
    return getItem('TOKEN');
}