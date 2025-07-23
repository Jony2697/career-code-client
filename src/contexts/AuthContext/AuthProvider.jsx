import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import axios from 'axios';

const provider=new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);
    const createUser=(email,password)=>{
        setLoading (true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOutUser=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const googleSingIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
        if(currentUser?.email){
            const userData={email:currentUser.email};
            axios.post('http://localhost:3000/jwt',userData,{
                withCredentials:true
            })
            .then(res=>{
                console.log('token after jwt',res.data);
                // const token=res.data.token ;
                // localStorage.setItem('token',token);   
            })
            .catch(error=>{
                console.log(error);
                
            })
        }
        console.log('user in the auth state change',currentUser);        
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo={
        loading,
        user,
        createUser,
        signInUser,
        logOutUser,
        googleSingIn
        
    }
    // console.log(authInfo);
    
    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;