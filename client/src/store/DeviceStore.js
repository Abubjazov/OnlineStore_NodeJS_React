import { makeAutoObservable } from 'mobx'

export class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'smartphones' },
            { id: 2, name: `tv's` },
            { id: 3, name: 'notebooks' },
            { id: 4, name: 'refrigerators' }
        ]
        this._brands = [
            { id: 1, name: 'apple' },
            { id: 2, name: 'samsung' },
            { id: 3, name: 'apple' },
            { id: 4, name: 'samsung' },
            { id: 5, name: 'apple' },
            { id: 6, name: 'samsung' },
            { id: 7, name: 'apple' },
            { id: 8, name: 'samsung' }
        ]
        this._devices = [
            { id: 1, name: 'iPhone 13 Pro', price: 3000, rating: 10, img: '5u4xh5uO0gincKtbmBXvD.jpg' },
            { id: 2, name: '50PUS6504', price: 5000, rating: 10, img: 'omDFZwHZ-jpjUtkdAv0xX.jpg' },
            { id: 3, name: 'iPhone 13 Pro', price: 3000, rating: 10, img: '5u4xh5uO0gincKtbmBXvD.jpg' },
            { id: 4, name: '50PUS6504', price: 5000, rating: 10, img: 'omDFZwHZ-jpjUtkdAv0xX.jpg' },
            { id: 5, name: 'iPhone 13 Pro', price: 3000, rating: 10, img: '5u4xh5uO0gincKtbmBXvD.jpg' },
            { id: 6, name: '50PUS6504', price: 5000, rating: 10, img: 'omDFZwHZ-jpjUtkdAv0xX.jpg' },
            { id: 7, name: 'iPhone 13 Pro', price: 3000, rating: 10, img: '5u4xh5uO0gincKtbmBXvD.jpg' },
            { id: 8, name: '50PUS6504', price: 5000, rating: 10, img: 'omDFZwHZ-jpjUtkdAv0xX.jpg' }
        ]
        this._selectedType = {}
        this._selectedBrand = {}

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

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
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

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}
