import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
const AuthContext = createContext({ user: null, isAdmin: false });
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => auth.onAuthStateChanged(async (u) => {
    setUser(u);
    if (u) {
      const tok = await u.getIdTokenResult();
      setIsAdmin(!!tok.claims.admin);
    } else setIsAdmin(false);
  }), []);
  return <AuthContext.Provider value={{ user, isAdmin }}>{children}</AuthContext.Provider>;
}
export function useAuth() { return useContext(AuthContext); }
