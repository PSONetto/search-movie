import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import MyRoutes from '../routes/MyRoutes'

function Layout() {
    return (
        <Fragment>
            <Header />
            <MyRoutes />
            <Footer />
        </Fragment>
    )
}

export default Layout