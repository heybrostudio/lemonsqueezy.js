// @ts-ignore
import { load } from 'https://deno.land/std@0.213.0/dotenv/mod.ts'
import { getAuthenticatedUser, lemonSqueezySetup } from '@heybrostudio/lemonsqueezy.js'

const env = await load()

lemonSqueezySetup({ apiKey: env.LEMON_SQUEEZY_API_KEY })
getAuthenticatedUser().then(({ data, statusCode, error }) => {
	console.log('Status code is: ', statusCode)
	console.log('error is null: ', error === null)
	console.log('Returns a user object: ', data)
})
