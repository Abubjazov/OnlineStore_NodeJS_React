import React, { useContext, useState } from 'react'
import { Card, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { login, registration } from '../http/userAPI'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Context } from '..'

export const AuthPage = observer(() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { user } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE

    const checkIn = async () => {
        try {
            if (isLogin) {
                await login(email, password)
            } else {
                await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE, { replace: true })
        } catch (error) {
            alert(error.response.data.message)
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
})
