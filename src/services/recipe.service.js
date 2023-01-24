import {
    storageService
} from './async-storage.service'
import {
    httpService
} from '../services/http.service'

// import allRecipes from '../data/recipes.json'

export const recipeService = {
    query,
    getById,
    remove,
    save,
    // getRecipes,
}

const BASE_URL = `recipe/`

async function query(filterBy = {}) {
    // const recipes = await storageService.get(BASE_URL, {
    //     params: filterBy
    // })
    console.log('Enter Query')
    const recipes = await httpService.get(BASE_URL, {
        params: filterBy
    })
    console.log('recipes :', recipes)
    return recipes
}

async function getById(productId) {
    // const product = await storageService.get(BASE_URL + productId)
    const product = await httpService.get(BASE_URL + productId)
    return product
}

// function getRecipes() {
//     return allRecipes
// }

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