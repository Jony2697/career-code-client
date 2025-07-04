import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

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

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
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
        logOutUser
        
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