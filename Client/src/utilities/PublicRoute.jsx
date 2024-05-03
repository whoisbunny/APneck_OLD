import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = (children) => {
  if (JSON.parse(localStorage.getItem('isAuth'))) {
    return <Navigate to={'/'} />
  }
  else{
    return children
  }
}

export default PublicRoute
