import url from './url'

const authProvider = {
    login: ({ username, password }) =>  {
        const request = new Request(url + '/authorize', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if(response.status == 401) {
                    throw new Error("Неверный логин или пароль");
                } else if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ credentials, roles, username }) => {
                localStorage.setItem('token', credentials);
                localStorage.setItem('roles', JSON.stringify(roles));
                localStorage.setItem('username', username);
            });
    },
    logout: params => {
        localStorage.removeItem('token')
        localStorage.removeItem('roles')
        localStorage.removeItem('username')
        return Promise.resolve()
    },
    checkAuth: params =>  localStorage.getItem('token')
                            ? Promise.resolve()
                            : Promise.reject(),
    checkError: error => Promise.resolve(),
    getPermissions: params => {
        const roles = localStorage.getItem('roles');
        if(roles) {
            const rolesArray = JSON.parse(roles)
            return Promise.resolve(rolesArray)
        } else {
            return Promise.reject()
        }  
    },
};

export default authProvider