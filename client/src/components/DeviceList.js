import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Row } from 'react-bootstrap'

import { Context } from '..'
import { DeviceItem } from './DeviceItem'


export const DeviceList = observer(() => {
    const { device } = useContext(Context)

    return (
        <Row md={6}>
            {device.devices.map(device =>
                <DeviceItem key={device.name + device.id} device={device} />
            )}
        </Row>
    )
})
