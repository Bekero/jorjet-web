
import { recipeService } from '../../services/recipe.service.js'

export function loadRecipes() {

    return (dispatch, getState) => {
        const { filterBy } = getState().recipeModule

        recipeService.query(filterBy)
            .then(recipes => {
                dispatch({ type: 'SET_RECIPES', recipes })
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