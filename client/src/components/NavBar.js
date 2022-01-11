import React, { useContext } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import { ADMIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Context } from '..'

export const NavBar = observer(() => {
    const { user } = useContext(Context)

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>Electron.STORE</Navbar.Brand>
                <Nav className="me-auto">
                    {user.IsAuth ?
                        <>
                            <Nav.Link href={ADMIN_ROUTE}>Admin</Nav.Link>
                            <Nav.Link onClick={() => user.setIsAuth(false)}>LogOut</Nav.Link>
                        </>
                        :
                        <Nav.Link onClick={() => user.setIsAuth(true)}>LogIn</Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
})
