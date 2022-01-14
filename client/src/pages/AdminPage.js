import React from 'react'
import { Button, Container } from 'react-bootstrap'

export const AdminPage = () => {
    return (
        <Container className='d-flex flex-column'>
            <Button>Add Type</Button>
            <Button>Add Brand</Button>
            <Button>Add Device</Button>
        </Container>
    )
}
