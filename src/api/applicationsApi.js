export const myApplicationsPromise = email =>{
    return fetch(`http://localhost:3000/applications?email=${email}`,{
        credentials:'include'
    }).then(res=>res.json())
}