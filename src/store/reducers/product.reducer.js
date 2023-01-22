const INITIAL_STATE = {
    products: null,
}

export function productReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'SET_PRODUCTS':
            return {
                ...state, products: action.products
            }
            case 'SET_FILTER_BY':
                return {
                    ...state, filterBy: {
                        ...action.filterBy
                    }
                }

                default:
                    return state
    }

}