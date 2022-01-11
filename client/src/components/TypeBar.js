import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { ListGroup } from 'react-bootstrap'

import { Context } from '..'
import { normalizeString } from '../utils/normalizeString'

export const TypeBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <ListGroup variant="flush">
            {
                device.types.map(type =>
                    <ListGroup.Item
                        key={type.id}
                        active={type.id === device.selectedType.id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => device.setSelectedType(type)}
                    >{normalizeString(type.name, 0)}</ListGroup.Item>
                )
            }
        </ListGroup>
    )
})
