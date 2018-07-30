'use strict'

const Model = use('Model')

class Page extends Model {
    static get table() {
        return 'pages'
    }

    static get primaryKey() {
        return 'id'
    }

    static get createdAtColumn() {
        return null
    }

    static get updatedAtColumn() {
        return null
    }
}

module.exports = Page
