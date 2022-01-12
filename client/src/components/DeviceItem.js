import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'

import star from '../assets/star2.png'

export const DeviceItem = ({ device }) => {
    return (
        <Col md={3} className='mt-3'>
            <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
                <Image width={150} height={150} src={device.img} />
                <div className='d-flex justify-content-between align-items-center text-black-50'>
                    <div>Brand</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image src={star} width={17} height={17} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}
