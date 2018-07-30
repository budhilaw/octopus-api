'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const Page  = use('App/Models/Page')

Route.group(() => {
  Route.post('pages', async({ request, response }) => {
    const pageInfo  = request.only([ 'name', 'path', 'description', 'meta', 'pages', 'clients', 'published', 'status' ])

    const page        = new Page()
    page.name         = pageInfo.name
    page.path         = pageInfo.path
    page.description  = pageInfo.description
    page.meta         = pageInfo.meta
    page.pages        = pageInfo.pages
    page.clients      = pageInfo.clients
    page.published    = pageInfo.published
    page.status       = pageInfo.status

    await page.save()

    return response.status(201).json(page)
  })

  Route.get('pages', async({ response }) => {
    let pages       = await Page.all()

    return response.json(pages)
  })

  Route.get('pages/:id', async({ params, response }) => {
    const page      = await Page.find(params.id)

    return response.json(page)
  })

  Route.put('pages/:id', async({ params, request, response }) => {
    const pageInfo    = request.only([ 'name', 'path', 'description', 'meta', 'pages', 'clients', 'published', 'status' ])

    const page        = await Page.find(params.id)
    page.name         = pageInfo.name
    page.path         = pageInfo.path
    page.description  = pageInfo.description
    page.meta         = pageInfo.meta
    page.pages        = pageInfo.pages
    page.clients      = pageInfo.clients
    page.published    = pageInfo.published
    page.status       = pageInfo.status

    await page.save()

    return response.status(200).json(page)
  })

  Route.delete('pages/:id', async({ params, response }) => {
    const page      = await Page.find(params.id)
    if( !page ) {
      return response.status(404).json(null)
    }
    await page.delete()

    return response.status(204).json(null) 
  })
}).prefix('api/v1')

// Route.get('/', ({ request }) => {
//   return { greeting: 'Hello world in JSON' }
// })
