import  { createContext, useEffect, useState } from 'react';
import app from '../../Public/Assets/Firebase/FIrebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const ContextAPI = createContext()
const AuthContext = ({ children }) => {
    const auth = getAuth(app);
    const provider=new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/requests')
        .then(res=>res.json())
        .then(data=>setData(data))
    })


    
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)

}
const signInUser=(email, password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}

const logOutUser=()=>{
   return signOut(auth)

}

const signInWithGoogle=()=>{
    return signInWithPopup (auth,provider)
};
const updateUserProfile=(name)=>{
    return updateProfile(auth.currentUser, {
        displayName: name,
      })
      
}
const updateAdminProfile=(name,logo )=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL:logo
      })
      
}


useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
},[auth]);


    const ShareData = {
        user,
        setUser,
        createUser,
        signInUser,
        logOutUser,
        signInWithGoogle,
        updateUserProfile,
        updateAdminProfile,
        data
        
    }
    return (
        <ContextAPI.Provider value={ShareData}>
            {children}
        </ContextAPI.Provider>
    );
};

export default AuthContext;