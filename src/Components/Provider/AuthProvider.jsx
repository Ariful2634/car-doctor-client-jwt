import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth,GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)



    // google login

    // eslint-disable-next-line no-unused-vars
    const googleIn=(value)=>{
        setLoading(true)
       return signInWithPopup(auth,provider)
    }

    // create user

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login

    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logout user

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // subscribe

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setLoading(false)

    })
    },[])




    const authInfo={
        user,
        loading,
        createUser,
        loginUser,
        googleIn,
        logOut
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;