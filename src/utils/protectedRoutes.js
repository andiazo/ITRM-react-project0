
import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
  if(window.sessionStorage.role == 'admin'){
    return true
} else {
    return false
}
}

const  ProtectedRoutes=(props) =>{

  const auth=useAuth()

  return auth?<Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoutes;