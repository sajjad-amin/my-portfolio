export const setLoggedInData = data => {
    localStorage.setItem('user',JSON.stringify(data));
}
export const getLoggedInData = () => {
    const user = localStorage.getItem('user')
    if (user) {
        return JSON.parse(user)
    } else {
        return {}
    }
}
export const clearLoggedInData = () => {
    localStorage.removeItem('user')
}
export const isUserLoggedIn = (user) =>{
    let loggedIn = false;
    if(user && user.expire > Number.parseInt(Date.now()/1000)){
        loggedIn = true;
    }
    return loggedIn;
}