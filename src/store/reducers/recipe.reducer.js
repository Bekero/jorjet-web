const INITIAL_STATE = {
    recipes: null,
}

export function recipeReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'SET_RECIPES':
            return {
                ...state, recipes: action.recipes
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