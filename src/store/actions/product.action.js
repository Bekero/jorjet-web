
import { productService } from '../../services/product.service.js'

export function loadProducts() {

    return (dispatch, getState) => {
        const { filterBy } = getState().productModule

        productService.query(filterBy)
            .then(products => {
                dispatch({ type: 'SET_PRODUCTS', products })
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}