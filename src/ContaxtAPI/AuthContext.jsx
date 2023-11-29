import  { createContext, useEffect, useState } from 'react';
import app from '../../Public/Assets/Firebase/FIrebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
export const ContextAPI = createContext()
const AuthContext = ({ children }) => {
    const auth = getAuth(app);
    const provider=new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)
    
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
};
const updateUserProfile=(name,date)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, DateOfBirth: date
      })
      
}
const updateAdminProfile=(name,companyName,date,logo, )=>{
    return updateProfile(auth.currentUser, {
        displayName: name, DateOfBirth: date,CompanyName:companyName,logo:logo
      })
      
}
// useEffect(()=>{
//     const unSubscribe=onAuthStateChanged(auth,currentUser=>{
//         console.log('user auth state changes',currentUser);
//         setUsers(currentUser);
//         setLoading(false)
//     })
//     return()=>{
//         unSubscribe();
//     }
// },[])

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
        updateAdminProfile
        
    }
    return (
        <ContextAPI.Provider value={ShareData}>
            {children}
        </ContextAPI.Provider>
    );
};

export default AuthContext;