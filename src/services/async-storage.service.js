import product from '../data/products.json'
import recipe from '../data/recipes.json'

export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany
}

function query(entityType, delay = 0) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    if (!entities.length) {
        if (entityType === 'product/') {
            _save(entityType, product)
        } else if (entityType === 'recipe/') {
            _save(entityType, recipe)
        }
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(entities)
        }, delay)
    })
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            console.log('entities :', entities)
            return entities
            // return entities.find(entity => entity._id === entityId)
        })
    // .then(entities => entities.find(entity => entity._id === entityId))
}

function postMany(entityType, entities) {
    _save(entityType, entities)
    return Promise.resolve(entities)
}

function post(entityType, newEntity) {
    newEntity._id = _makeId()
    newEntity.createdAt = Date.now()
    newEntity.inStock = true
    console.log('newEntity :', newEntity)
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234657890'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}