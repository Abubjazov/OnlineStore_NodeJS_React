import React, { useContext, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { nanoid } from 'nanoid'
import { Context } from '../..'

export const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { id: nanoid(), title: '', desc: '' }])
    }

    const removeInfo = (id) => {
        setInfo([...info].filter(item => item.id !== id))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Device
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <div className='d-flex'>
                        <Dropdown className='m-2'>
                            <Dropdown.Toggle variant="secondary">Select type</Dropdown.Toggle>
                            <Dropdown.Menu variant="dark">
                                {device.types.map(type =>
                                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className='m-2'>
                            <Dropdown.Toggle variant="secondary">Select brand</Dropdown.Toggle>
                            <Dropdown.Menu variant="dark">
                                {device.brands.map(brand =>
                                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <hr />

                    <Form.Control
                        className='mt-3'
                        placeholder={'Input device name'}
                    />

                    <Form.Control
                        className='mt-3'
                        placeholder={'Input device price'}
                        type='number'
                    />

                    <Form.Control
                        className='mt-3'
                        type='file'
                    />

                    <hr />

                    <Button variant='outline-dark' onClick={addInfo}>Add New Property</Button>
                    {info.map(row =>
                        <Row key={row.id}>
                            <Col md={4}>
                                <Form.Control
                                    className='mt-3'
                                    placeholder={'Input property name'}
                                />
                            </Col>

                            <Col md={4}>
                                <Form.Control
                                    className='mt-3'
                                    placeholder={'Input property description'}
                                />
                            </Col>

                            <Col md={4}>
                                <Button variant='outline-danger' className='mt-3' onClick={() => removeInfo(row.id)}>Remove</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}
