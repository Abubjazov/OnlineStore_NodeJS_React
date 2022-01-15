import React, { useContext } from 'react'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Context } from '..'
import { NavLink, useNavigate } from 'react-router-dom'

export const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>Electron.STORE</NavLink>
                <Nav className="ml-auto">
                    {user.IsAuth ?
                        <>
                            <Button variant='outline-light' onClick={() => navigate(ADMIN_ROUTE, { replace: true })} style={{ marginRight: 5 }}>Admin</Button>
                            <Button variant='outline-light' onClick={() => logOut()}>LogOut</Button>
                        </>
                        :
                        <Button variant='outline-light' onClick={() => navigate(LOGIN_ROUTE, { replace: true })}>LogIn</Button>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
})
