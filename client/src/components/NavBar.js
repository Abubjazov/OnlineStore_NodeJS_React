import React, { useContext } from 'react'
import { Context } from '..'
import { Nav, Navbar, Container } from 'react-bootstrap'

export const NavBar = () => {
    const { user } = useContext(Context)

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Electron.STORE</Navbar.Brand>
                <Nav className="me-auto">
                    {user.IsAuth ?
                        <>
                            <Nav.Link href="#features">Admin</Nav.Link>
                            <Nav.Link href="#pricing">LogOut</Nav.Link>
                        </>
                        :
                        <Nav.Link href="#home">LogIn</Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}
