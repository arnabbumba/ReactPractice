import Logo from "../assets/logo.png"
import React from 'react'

export const Header = () => {
  return (
    <header>
        <img src={Logo} alt=''/>
        <a href='/'>Home</a>
    </header>
  )
}
