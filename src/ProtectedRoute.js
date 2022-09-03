import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const ProtectedRoute = (props) => {
    let Cmp = props.Cmp
     const history = useHistory();
     useEffect(()=>{
        let Login = localStorage.getItem("login")
        console.log('>>>>>>>>>>>>>>>',!!Login)
        if(Login){
            console.log('inside')
            history.push("/")
        }else{
            history.push("/login")
        }
        },[])
        


    return (
        <>
            <Cmp/>
        </>
    )
}

export default ProtectedRoute;