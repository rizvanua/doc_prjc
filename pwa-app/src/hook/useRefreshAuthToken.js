import { useContext, useDebugValue, useMemo } from "react";
import AuthContext from "context/AuthProvider";
import checkAuthToken from "service/checkAuthToken";
import useAuth from "./useAuth";
// import refreshToken from "worker/refreshToken"

const useRefreshAuthToken = () => {
    const { auth, setAuth } = useAuth();
  const appWorker = useMemo(
    () => window.Worker && new Worker(new URL('worker/checkRefreshToken.js',import.meta.url)),
    []
  )
  useMemo(
    () => auth?.refreshToken && appWorker.postMessage({refreshToken:auth.refreshToken, expiresIn: auth.expiresIn}),
    [auth?.refreshToken]
  )
  appWorker.onmessage = function(e) {
      if(e.data && e.data.isAuth && e.data.accessToken) {
        localStorage.setItem('token', e.data.accessToken);
        setAuth({...auth, ...e.data})
      }
  } 
};

export default useRefreshAuthToken;
