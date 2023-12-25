import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app);
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = async (email, password, name, studentId) => {
        try {
          const authResult = await createUserWithEmailAndPassword(auth, email, password);
      
          // After creating the user, update their profile with additional information
          await updateProfile(authResult.user, {
            displayName: name,  // Set display name to the user's name
          });
      
          // You can also store the student ID in the user's custom claims or in the database
          // For simplicity, let's store it in the user's display name here
          await updateProfile(authResult.user, {
            displayName: `${name} - ${studentId}`,  // Set display name to include both name and student ID
          });
          return authResult;
  } catch (error) {
    throw error;
  }
};
    const login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () => {
      return signOut(auth);
    };

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser =>{
            // console.log(currentUser);
            setUser(currentUser);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo ={
        user,
        createUser,
        login,
        logout,
        
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
    
    );
};

export default Authprovider;