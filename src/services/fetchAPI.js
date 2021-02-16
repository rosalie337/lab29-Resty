export const fetchAPI = (url, method, results) => {
    if(method !== 'GET'){
        return fetch(url, {
            method,
            headers:{
                'Content-Type': 'application/json'
            },
            results
        })
            .then(res = res.json());   
    }
    return fetch(url)
        .then (res => res.json());
}

