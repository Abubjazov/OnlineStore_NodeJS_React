import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import star from '../assets/star2.png'
import { fetchDeviceById } from '../http/deviceAPI'

export const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] })
    const { deviceId } = useParams()

    useEffect(() => {
        fetchDeviceById(deviceId).then(data => setDevice(data))
    }, [])

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
                </Col>

                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2 style={{ textAlign: 'center' }}>{device.name}</h2>
                        <div
                            className='d-flex justify-content-center align-items-center'
                            style={{ background: `url(${star}) no-repeat center center`, width: 250, height: 250, backgroundSize: 'cover', fontSize: 64 }}
                        >{device.rating}</div>
                    </Row>
                </Col>

                <Col md={4}>
                    <Card
                        className='d-flex flex-column justify-content-around align-items-center'
                        style={{ width: 300, height: 300, fontSize: 32 }}
                    >
                        <h3>From: {device.price} $</h3>
                        <Button variant='outline-dark'>Add to Cart</Button>
                    </Card>

                </Col>
            </Row>

            <Row className='d-flex flex-column m-5'>
                <h1 style={{ textAlign: 'center' }}>Specifications</h1>
                {device.info.map((item, index) =>
                    <Row key={item.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                        {item.title}: {item.desc}
                    </Row>
                )}
            </Row>
        </Container>
    )
}
