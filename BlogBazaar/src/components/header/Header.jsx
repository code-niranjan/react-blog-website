import React from 'react'
import './Header.css'
import { Navbar } from '../navbar/Navbar'

export const Header = () => {


  return (
    <>
    <div id="header">
        <div className="header-box">
          <div className="header-logo">BlogBazzar</div>
          <Navbar/>
        </div>
    </div>
    </>
  )
}
