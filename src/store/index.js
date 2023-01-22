import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { recipeReducer } from './reducers/recipe.reducer.js'
import { productReducer } from './reducers/product.reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    recipeModule: recipeReducer,
    productModule: productReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
window.gStore = store