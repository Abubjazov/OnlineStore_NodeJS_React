import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { CreateBrand, CreateDevice, CreateType } from '../components/modals'

export const AdminPage = () => {
    return (
        <Container className='d-flex flex-column'>
            <Button variant='outline-dark' className='mt-2 p-2'>Add Type</Button>
            <Button variant='outline-dark' className='mt-2 p-2'>Add Brand</Button>
            <Button variant='outline-dark' className='mt-2 p-2'>Add Device</Button>

            <CreateBrand />
            <CreateType show={true} />
            <CreateDevice />
        </Container>
    )
}
