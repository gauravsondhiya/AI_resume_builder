import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Signin from './auth/Signin.jsx'
import { Home } from 'lucide-react'
import Main from './Main/Main.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const router = createBrowserRouter([
  {
    
    element:<App/>,
    children:[
      {
        path:"/Dashboard",
        element:<Dashboard/>
      }
    ]
  },
  {
    path:'/',
    element:<Main/>
  },
  {
    path:"/auth/Signin",
    element:<Signin/>
  }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>,
)
