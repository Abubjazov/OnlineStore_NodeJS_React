import React from 'react'
import { Card, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { REGISTRATION_ROUTE } from '../utils/consts'

export const AuthPage = () => {
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>LogIn</h2>
                <Form className='d-flex flex-column '>
                    <FormControl
                        className='mt-3'
                        placeholder='email'
                    />
                    <FormControl
                        className='mt-3'
                        placeholder='password'
                    />
                    <Row className='mt-3 pl-3 pr-3'>
                        <Col>
                            <Button
                                variant='outline-success'
                            >LogIn</Button>
                        </Col>
                        <Col>
                            <div>
                                Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Sign up!</NavLink>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

