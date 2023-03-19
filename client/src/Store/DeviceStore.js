import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'}
        ]
        this._devices = [
            {id: 1, name: "12 pro", price: 100000, rating: 0, img: "b65233c9-356b-4c03-8579-89b9202438b6.jpg"},
            {id: 2, name: "a52", price: 35000, rating: 0, img: "7089872e-3b6b-458f-9084-1243fde25589.jpg"},
            {id: 3, name: "a33", price: 30000, rating: 0, img: "b3b61191-71da-4d5c-b6eb-062da5e2b00d.jpg"},
            {id: 4, name: "14 pro max", price: 140000, rating: 0, img: "84a313d8-47e9-4111-8fcd-5003a382ea22.jpg"}
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