import './App.css'
import React from 'react'

import Header from '../template/header/Header'
import Main from '../template/main/Main'
import Footer from '../template/footer/Footer'
import Logo from '../template/logo/Logo'

export default props => 
    <div className="app">
        <Logo />
        <Header />
        <Main />
        <Footer />
    </div>