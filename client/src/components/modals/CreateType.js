import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createType } from '../../http/deviceAPI'

export const CreateType = ({ show, onHide }) => {
    const [typeStr, setTypeStr] = useState('')

    const addType = () => {
        createType({ name: typeStr }).then(data => {
            setTypeStr('')
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
                    Add New Type
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Control
                        typestr={typeStr}
                        onChange={e => setTypeStr(e.target.value)}
                        placeholder={'Input type name'}
                    />
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-dark' onClick={addType}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}
