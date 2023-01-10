import {
    storageService
} from './async-storage.service'

import designedCakes from '../data/designed-cakes.json'
import cases from '../data/cases.json'
// import gProducts from '../data/designed-cakes.json'

export const productService = {
    query,
    getById,
    remove,
    save,
    getProducts,
}

const BASE_URL = `product/`

async function query(filterBy = {}) {
    const products = await storageService.get(BASE_URL, {
        params: filterBy
    })
    return products
}

async function getById(productId) {
    const product = await storageService.get(BASE_URL + productId)
    return product
}

function getProducts() {

    return designedCakes
}

async function remove(productId) {
    const product = await storageService.delete(BASE_URL + productId)
    return product
}

async function save(product) {
    if (product._id) {
        const res = storageService.put(BASE_URL + product._id, product).then(products => products)
        return res
    } else {
        const res = storageService.post(BASE_URL, product)
        return res
            .then(products => products)
    }
}