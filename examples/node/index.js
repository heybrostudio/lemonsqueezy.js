const { lemonSqueezySetup, getAuthenticatedUser } = require('@heybrostudio/lemonsqueezy.js')
require('dotenv').config()

if (parseInt(process.versions.node.split('.')[0]) < 18) {
  throw Error('This library requires a minimum version of Node.js of 18.')
}

lemonSqueezySetup({ apiKey: process.env.LEMON_SQUEEZY_API_KEY })
getAuthenticatedUser().then(({ data, statusCode, error }) => {
  console.log('Status code is: ', statusCode)
  console.log('error is null: ', error === null)
  console.log('Returns a user object: ', data)
})
