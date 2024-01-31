import { getAuthenticatedUser, lemonSqueezySetup } from '@heybrostudio/lemonsqueezy.js'

lemonSqueezySetup({ apiKey: process.env.LEMON_SQUEEZY_API_KEY })

getAuthenticatedUser().then(({ data, statusCode, error }) => {
	console.log('Status code is: ', statusCode)
	console.log('error is: ', error?.message)
	console.log('Returns a user object: ', data)
})
