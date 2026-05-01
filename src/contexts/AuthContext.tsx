import React, { createContext, useContext } from 'react';

interface AuthContextType {
  user: null;
  session: null;
  loading: false;
  signUp: () => Promise<{ error: null }>;
  signIn: () => Promise<{ error: null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: false,
  signUp: async () => ({ error: null }),
  signIn: async () => ({ error: null }),
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <AuthContext.Provider value={{
    user: null,
    session: null,
    loading: false,
    signUp: async () => ({ error: null }),
    signIn: async () => ({ error: null }),
    signOut: async () => {},
  }}>{children}</AuthContext.Provider>;
};
