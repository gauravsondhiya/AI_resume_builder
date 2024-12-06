import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Outlet,useNavigate } from 'react-router'
import Header from './Header/Header'

const App = () => {
  const {user,isloaded,isSignedIn}= useUser()
  const navigate = useNavigate()
  if(!isSignedIn&&isloaded){
    return  navigate("/auth/Signin") 
   
  }
  return (
    <div>
    <Header/>
     <Outlet/>
    </div>
  )
}

export default App
