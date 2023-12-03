//import useContext => it is use when you want to use the context api
// import createContext => it is use to create context 
import React, { useState, useEffect, createContext, useContext } from 'react';

const authContext = createContext();

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const data = localStorage.getItem('auth');

    return data ? JSON.parse(data) : { user: null, token: '' };
  });

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
   
  }, [auth]);

  return (
    <authContext.Provider value={[auth, setAuth]}>
      {children}
    </authContext.Provider>
  );
};


