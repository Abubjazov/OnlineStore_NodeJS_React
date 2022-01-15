import React, { useState } from 'react'
import { Card, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

export const AuthPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const checkIn = async () => {
        if (isLogin) {
            const response = await login(email, password)
            console.log(response)
        } else {
            const response = await registration(email, password)
            console.log(response)
        }
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'LogIn' : 'Registration'}</h2>
                <Form className='d-flex flex-column '>
                    <FormControl
                        className='mt-3'
                        placeholder='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type='email'
                    />
                    <FormControl
                        className='mt-3'
                        placeholder='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <Row className='mt-3 pl-3 pr-3'>
                        <Col>
                            <Button
                                variant='outline-success'
                                onClick={checkIn}
                            >{isLogin ? 'LogIn' : 'SignUp'}</Button>
                        </Col>
                        <Col>
                            <div>
                                {isLogin ? `Don't have an account?` : 'Have an account?'} <NavLink to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}>{isLogin ? 'SignUp' : 'LogIn'}</NavLink>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

