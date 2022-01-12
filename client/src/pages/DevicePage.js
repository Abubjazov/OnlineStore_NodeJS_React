import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'

import star from '../assets/star2.png'

export const DevicePage = () => {
    const device = { id: 1, name: 'iPhone 13 Pro', price: 3000, rating: 10, img: '5u4xh5uO0gincKtbmBXvD.jpg' }
    const description = [
        { id: 1, title: 'RAM', desc: '5 Gb' },
        { id: 2, title: 'Main camera', desc: '12 Mpx' },
        { id: 3, title: 'CPU', desc: 'SnapDragon 820' },
        { id: 4, title: 'CPU Cores', desc: '8(4A+4E)' },
        { id: 5, title: 'Battery', desc: '6000 mAh' },
    ]

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>

                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
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

            <Row className='d-flex flex-column m-3'>
                <h1>Specifications</h1>
                {description.map((item, index) =>
                    <Row key={item.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                        {item.title}: {item.desc}
                    </Row>
                )}
            </Row>
        </Container>
    )
}
