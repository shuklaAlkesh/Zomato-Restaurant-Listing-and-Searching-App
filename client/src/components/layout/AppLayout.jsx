import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const AppLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default AppLayout