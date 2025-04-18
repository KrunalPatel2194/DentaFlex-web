import { useContext, createContext, useState, Redirect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();
  const loginAction = async (data) => {
    try {
      // console.log("AUTH LOGIN CRED : ", data.get("email"));
      const username= data.get('email');
      const password= data.get('password');
      const payload = {
        username,password
      }
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const res = await response.json();
      console.log(res.token)
      if (res) {
        // setUser(res.data.user);
        setToken(res.token);
        // console.log(token ,"STORED")
        localStorage.setItem("site", res.token);
        // setIsAuthenticated(true);
        navigate("/book");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };
  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };
  const signUpAction = async (data) => {
    try {
      // console.log("AUTH LOGIN CRED : ", data.get("email"));
      const username= data.get('email');
      const password= data.get('password');
      const firstName = data.get('firstName');
      const lastName = data.get('lastName');
      const email = data.get('email');
      const payload = {
        username, password, firstName, lastName, email
      }
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const res = await response.json();
      // console.log(res.token)
      if (res) {
        // setUser(res.data.user);
        setToken(res.token);
        // console.log(token ,"STORED")
        localStorage.setItem("site", res.token);
        // setIsAuthenticated(true);
        navigate("/book");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut, signUpAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};