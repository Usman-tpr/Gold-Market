import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { AuthProvider } from '../Context/auth'
const Layout = ({children}) => {
  return (
    <AuthProvider>
    
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
   
    </AuthProvider>
  )
}

export default Layout