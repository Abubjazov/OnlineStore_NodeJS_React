import React, { useContext } from 'react'
import { Button, Dropdown, Form, Modal } from 'react-bootstrap'
import { Context } from '../..'

export const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context)

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
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}
