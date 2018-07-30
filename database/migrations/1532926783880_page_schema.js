'use strict'

const Schema = use('Schema')

class PageSchema extends Schema {
  up () {
    this.create('pages', (table) => {
      table.increments('id', 11);
      table.string('name', 50)
      table.string('path', 50)
      table.string('description', 100)
      table.text('meta')
      table.text('pages')
      table.string('clients', 100)
      table.boolean('published')
      table.boolean('status')
    })
  }

  down () {
    this.drop('pages')
  }
}

module.exports = PageSchema
