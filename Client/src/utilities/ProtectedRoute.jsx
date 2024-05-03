import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = (children) => {
  if (JSON.parse(localStorage.getItem('isAuth'))) {
      return children
    }
    else{
      return <Navigate to={'/'} />
  }
}

export default PublicRoute
