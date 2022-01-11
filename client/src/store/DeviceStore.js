import { makeAutoObservable } from 'mobx'

export class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'smartphone' },
            { id: 2, name: 'tv' }
        ]
        this._brands = [
            { id: 1, name: 'Apple' },
            { id: 2, name: 'Samsung' }
        ]
        this._devices = [
            { id: 1, name: 'iPhone 13 Pro', price: 3000, rating: 10, img: '5u4xh5uO0gincKtbmBXvD.jpg' },
            { id: 2, name: '50PUS6504_60-IMS-ru_RU', price: 5000, rating: 10, img: 'omDFZwHZ-jpjUtkdAv0xX.jpg' }
        ]

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}
