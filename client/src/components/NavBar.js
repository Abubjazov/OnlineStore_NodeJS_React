import React, { useContext } from 'react'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Context } from '..'
import { NavLink } from 'react-router-dom'

export const NavBar = observer(() => {
    const { user } = useContext(Context)

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>Electron.STORE</NavLink>
                <Nav className="ml-auto">
                    {user.IsAuth ?
                        <>
                            <Button variant='outline-light' style={{ marginRight: 5 }}>Admin</Button>
                            <Button variant='outline-light' onClick={() => user.setIsAuth(false)}>LogOut</Button>
                        </>
                        :
                        <Button variant='outline-light' onClick={() => user.setIsAuth(true)}>LogIn</Button>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
})
