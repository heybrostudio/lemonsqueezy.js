import { getAuthenticatedUser, lemonSqueezySetup, validateLicense } from '../dist'

lemonSqueezySetup({
  apiKey: process.env.LEMON_SQUEEZY_API_KEY,
})

getAuthenticatedUser().then((res) => {
  console.log(res.data?.data.attributes)
})

validateLicense(import.meta.env.LEMON_SQUEEZY_LICENSE_KEY).then((res) => {
  console.log(res.data)
})
