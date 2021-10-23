import React from 'react'
import Header from './Header'

const Base = ({children}) => {
    return (
        <>
         <Header />
         {children}   
        </>
    )
}

export default Base
