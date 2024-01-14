import { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { TOKEN } from '../const';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = Cookies.get(TOKEN)
  const [authenticated, setAuthenticated] = useState(token ? true :false);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};