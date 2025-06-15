import {createContext,useContext,useEffect,useState} from 'react';
import {auth} from '../firebase';
const AuthContext=createContext({user:null});
export function AuthProvider({children}){
  const [user,setUser]=useState(null);
  useEffect(()=>{
    if(auth){
      const unsub=auth.onAuthStateChanged(setUser);
      return unsub;
    }
  },[]);
  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
}
export function useAuth(){return useContext(AuthContext);}
