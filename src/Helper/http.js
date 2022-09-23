export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const sendRequest = async (endpoint, method, body, header, callback) => {
    const data = await fetch(BASE_URL+endpoint,{
        method: !method ? 'GET' : method,
        body: body,
        headers: header ? header : {},
    });
    const json = await data.json();
    callback(json);
}