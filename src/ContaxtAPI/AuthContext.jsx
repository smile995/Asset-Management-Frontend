import  { createContext, useState } from 'react';
import app from '../../Public/Assets/Firebase/FIrebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const ContextAPI = createContext()
const AuthContext = ({ children }) => {
    const auth = getAuth(app);
    const provider=new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    
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
    return signInWithGoogle(auth,provider)
}


    const ShareData = {
        user,
        setUser,
        createUser,
        signInUser,
        logOutUser,
        signInWithGoogle,
        
    }
    return (
        <ContextAPI.Provider value={ShareData}>
            {children}
        </ContextAPI.Provider>
    );
};

export default AuthContext;