import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Card, Row } from 'react-bootstrap'

import { Context } from '..'
import { normalizeString } from '../utils/normalizeString'


export const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <Row md={6}>
            {device.brands.map(brand =>
                <Card
                    key={brand.name + brand.id}
                    className='p-3 m-1 align-items-center border-dark '
                    onClick={brand.id === device.selectedBrand.id ? () => device.setSelectedBrand({}) : () => device.setSelectedBrand(brand)}
                    bg={brand.id === device.selectedBrand.id ? 'dark' : 'light'}
                    text={brand.id === device.selectedBrand.id ? 'light' : 'dark'}
                    style={{ cursor: 'pointer' }}
                >
                    {normalizeString(brand.name, 0)}
                </Card>
            )}
        </Row>
    )
})
