import React, { useState, useEffect } from 'react';

export const AuthContext = React.createContext({
  currentUser: null,
});

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <Provider value={{ user }}>{children}</Provider>;
};
