import React, { useContext } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Context } from '..'
import { useNavigate } from 'react-router-dom'

export const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>Electron.STORE</Navbar.Brand>
                <Nav className="me-auto">
                    {user.IsAuth ?
                        <>
                            <Nav.Link onClick={() => navigate(ADMIN_ROUTE)}>Admin</Nav.Link>
                            <Nav.Link onClick={() => navigate(LOGIN_ROUTE)}>LogOut</Nav.Link>
                        </>
                        :
                        <Nav.Link onClick={() => user.setIsAuth(true)}>LogIn</Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
})
