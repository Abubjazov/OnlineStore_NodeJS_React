import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Page404 } from '../pages'
import { authRoutes, publicRoutes } from '../routes'

export const AppRouter = () => {
    const isAuth = false

    return (
        <BrowserRouter>
            <Routes>
                {isAuth && authRoutes.map(({ path, Component }, index) =>
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
