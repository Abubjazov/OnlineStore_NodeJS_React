import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Context } from '..'
import { Page404 } from '../pages'
import { authRoutes, publicRoutes } from '../routes'
import { NavBar } from './NavBar'


export const AppRouter = () => {
    const { user } = useContext(Context)

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                {authRoutes.map(({ path, Component }, index) => //user.isAuth && 
                    <Route key={index + path} path={path} element={<Component />} />
                )}

                {publicRoutes.map(({ path, Component }, index) =>
                    <Route key={index + path} path={path} element={<Component />} />
                )}

                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}
