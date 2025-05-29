import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword (auth,email,password)
    }

    const signOut=()=>{
        setLoading(true);
        return signOut(auth);
    }




    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword (auth,email,password)
    }
     
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setLoading(false);
            setUser(currentUser);
            console.log('user in the auth state change',currentUser);
        })
        return()=>{
            unSubscribe();
        }
    },[])

    
    const authInfo={
        loading,
        user,
        createUser,
        signInUser,
        signOut
    }


    return (
        <AuthContext value={authInfo}>
            {children}
       </AuthContext>
    );
};

export default AuthProvider;