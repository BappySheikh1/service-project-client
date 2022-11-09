export const setAuthToken =(user)=>{
    const currentUser ={
        email: user.email
    }
    fetch('https://service-project-server.vercel.app/jwt',{
        method: "POST",
        headers:{
          'Content-type':"application/json"
        },
        body: JSON.stringify(currentUser)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        // local storage is not the best place to store jwt token
        localStorage.setItem('wildPhotoGrapher',data.token)
    
       })
    
    }