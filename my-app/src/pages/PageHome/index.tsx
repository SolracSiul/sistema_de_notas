import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'

export const Private = () =>{
  const auth = useContext(AuthContext)
  return(
      <div>
          <h1> Olá {auth.user?.name} seja bem vindo</h1>
      </div>
  )
}