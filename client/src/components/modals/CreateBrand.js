import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createBrand } from '../../http/deviceAPI'

export const CreateBrand = ({ show, onHide }) => {
    const [brandStr, setBrandStr] = useState('')

    const addBrand = () => {
        createBrand({ name: brandStr }).then(() => {
            setBrandStr('')
            onHide()
        })
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
                    Add New Brand
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Control
                        brandvalue={brandStr}
                        onChange={e => setBrandStr(e.target.value)}
                        placeholder={'Input brand name'}
                    />
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-dark' onClick={addBrand}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}
