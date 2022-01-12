import React from 'react'
import { Card, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import { BrandBar } from '../components/BrandBar'
import { DeviceList } from '../components/DeviceList'
import { TypeBar } from '../components/TypeBar'

export const ShopPage = () => {
    return (
        <Container>
            <Row className='mt-1'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    )
}
