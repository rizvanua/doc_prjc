import React, { useMemo } from "react";
import useAuth from 'hook/useAuth';
import useRefreshAuthToken from 'hook/useRefreshAuthToken'
import checkAuthToken from "../service/checkAuthToken"

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
	// TODO: Use authentication token
	const localStorageToken = localStorage.getItem("token");
	const { auth, setAuth } = useAuth();
	useRefreshAuthToken()
	
	useMemo(() => {
		!auth && checkAuthToken().then((data)=>{console.log('!!!',data);setAuth(data)})

	},[auth])
	if(auth===undefined) {
		return <div>...wait</div>
	}

	return auth.isAuth ? <Outlet /> : <Navigate to="/login"  replace />;
};

export default ProtectedRoutes;