# APIs Usage [WIP]

🟠 **Please note that this is not the official API documentation, only the APIs usage methods for this library.**

- Only 3 APIs (`activateLicense`, `validateLicense`, `deactivateLicense`) do not require an **api key**. For other APIs, you need to use `lemonSqueezySetup` to set the `apiKey` before using them.
- For methods starting with `get` (getXXX methods), the parameters include a required `id` parameter and an optional `params` object parameter. The `params` object parameter includes an optional `include` property (an array of strings) to specify the related resources to include in the response.
-  For methods starting with `list` (listXXXs methods), the parameters include an optional `params` object parameter, which includes the optional `filter`, `include`, and `page` properties. For more information on how these three attributes are used, see the api usage notes below.
- For methods starting with `create` and `update` (createXXX and updateXXX methods), the parameters include a required `id` parameter and an **information object** for creating or updating.
- For methods starting with `cancel` and `delete` (cancelXXX and deleteXXX methods), the parameter includes a required `id` parameter.
- The **API Response** is an object containing three attributes: `statusCode`, `error`, and `data`. `statusCode` is the status code of the request, `error` may be a request error, response error, or null, and `data` is the response data from the Lemon Squeezy API.

🟠 **Be sure to keep your API keys secure!** Do not share your API keys in publicly accessible areas such as GitHub, client-side code, and so forth. [View More](https://docs.lemonsqueezy.com/api#authentication)

## Set API Key

```ts
import { lemonSqueezySetup } from '@heybrostudio/lemonsqueezy.js'

lemonSqueezySetup({
  // Create a new API key: https://app.lemonsqueezy.com/settings/api'
  apiKey: 'Your Lemon Squeezy API Key',
  // (Optional) Fires after a fetch response error
  onError?(error: Error) { 
    // ...
  }
})
```

## Users

Retrieves the currently authenticated user.

Request

```ts
const { data, statusCode, error } = await getAuthenticatedUser()
```

Response

```ts
{
  statusCode: 200,
  error: null,
  data: {
    meta: {
      test_mode: true,
    },
    jsonapi: {
      version: '1.0',
    },
    links: {
      self: 'https://api.lemonsqueezy.com/v1/users/1',
    },
    data: {
      type: 'users',
      id: '1',
      attributes: {
        name: 'Darlene Daugherty',
        email: 'gernser@yahoo.com',
        color: '#898FA9',
        avatar_url: 'https://www.gravatar.com/avatar/1ace5b3965c59dbcd1db79d85da75048?d=blank',
        has_custom_avatar: false,
        createdAt: '2021-05-24T14:08:31.000000Z',
        updatedAt: '2021-08-26T13:24:54.000000Z',
      },
      links: {
        self: 'https://api.lemonsqueezy.com/v1/users/1',
      },
    },
  },
}
```

## Stores

## Customers

## Products

## Variants

## Prices

## Files

## Orders

## Order Items

## Subscriptions

## Subscription Invoices

## Subscription Items

## Usage Records

## Discounts

## Discount Redemptions

## License Keys

## License Key Instances

## Checkouts

## Webhooks