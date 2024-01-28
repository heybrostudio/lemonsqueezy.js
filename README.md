# The Lemon Squeezy JavaScript/TypeScript SDK

[![Build Status](https://travis-ci.org/your-username/your-library.svg?branch=master)](https://travis-ci.org/your-username/your-library)
[![npm version](https://badge.fury.io/js/your-library.svg)](https://www.npmjs.com/package/your-library)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Introduction

This is the unofficial JavaScript SDK for Lemon Squeezy.

Please read the [API introduction page](https://docs.lemonsqueezy.com/api) to understand how the API works.

## Features

- Type Strong: Written in [TypeScript](https://www.typescriptlang.org/), with [TS Docs](https://github.com/microsoft/tsdoc)
- Fully tree shakeable: Only take what you want, [bundle size](#bundle-size)
- One-to-one implementation with the official [API documentation](https://docs.lemonsqueezy.com/api)
- Real-time synchronization with official [API changelog](https://docs.lemonsqueezy.com/api/changelog)

## Installation

```bash
# bun
bun install @heybrostudio/lemonsqueezy.js
```

```bash
# pnpm
pnpm install @heybrostudio/lemonsqueezy.js
```

```bash
# npm
npm install @heybrostudio/lemonsqueezy.js
```

## Usage

```ts
import { lemonSqueezySetup, getAuthenticatedUser } from '@heybrostudio/lemonsqueezy.js'

lemonSqueezySetup({ apiKey: 'Your Lemon Squeezy API Key.' })

const { data, error, statusCode } = await getAuthenticatedUser()

console.log(statusCode) // 200
console.log(error) // null
console.log(data)
/*
{
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
}
*/
```

For more API usage, see [APIs Usage](https://github.com/heybrostudio/lemonsqueezy.js/blob/main/APIs.md).

## Bundle size

| export                         | min+brotli |
| :----------------------------- | ---------: |
| createDiscount                 | 870 B      |
| createCheckout                 | 825 B      |
| listLicenseKeyInstances        | 772 B      |
| listVariants                   | 770 B      |
| listStores                     | 769 B      |
| listPrices                     | 767 B      |
| listSubscriptionInvoices       | 767 B      |
| listOrderItems                 | 766 B      |
| listDiscounts                  | 765 B      |
| listLicenseKeys                | 765 B      |
| updateSubscription             | 765 B      |
| listCheckouts                  | 764 B      |
| listUsageRecords               | 764 B      |
| listDiscountRedemptions        | 761 B      |
| listSubscriptionItems          | 760 B      |
| listWebhooks                   | 759 B      |
| listFiles                      | 755 B      |
| listOrders                     | 755 B      |
| listProducts                   | 755 B      |
| listSubscriptions              | 754 B      |
| listCustomers                  | 753 B      |
| createWebhook                  | 748 B      |
| updateLicenseKey               | 740 B      |
| updateWebhook                  | 732 B      |
| deactivateLicense              | 702 B      |
| activateLicense                | 701 B      |
| validateLicense                | 699 B      |
| getLicenseKeyInstance          | 650 B      |
| getDiscountRedemption          | 646 B      |
| getSubscriptionInvoice         | 641 B      |
| getUsageRecord                 | 638 B      |
| getWebhook                     | 638 B      |
| getLicenseKey                  | 637 B      |
| getOrderItem                   | 637 B      |
| getCheckout                    | 635 B      |
| getDiscount                    | 634 B      |
| getFile                        | 634 B      |
| getOrder                       | 634 B      |
| getPrice                       | 634 B      |
| getProduct                     | 634 B      |
| getVariant                     | 634 B      |
| getCustomer                    | 632 B      |
| getStore                       | 632 B      |
| getSubscription                | 631 B      |
| updateSubscriptionItem         | 626 B      |
| archiveCustomer                | 617 B      |
| createCustomer                 | 614 B      |
| getSubscriptionItemCurrentUsage| 614 B      |
| createUsageRecord              | 611 B      |
| updateCustomer                 | 610 B      |
| deleteWebhook                  | 591 B      |
| getSubscriptionItem            | 589 B      |
| cancelSubscription             | 585 B      |
| deleteDiscount                 | 584 B      |
| getAuthenticatedUser           | 527 B      |
| lemonSqueezySetup              | 100 B      |

## Contributing

See the [Contributing Guide](https://github.com/heybrostudio/lemonsqueezy.js/blob/main/CONTRIBUTING.md)

## Thanks

This project is heavily inspired by the following awesome projects.

- [lmsqueezy/lemonsqueezy.js](https://github.com/lmsqueezy/lemonsqueezy.js)

## License

[MIT License](https://github.com/heybrostudio/lemonsqueezy.js/blob/main/LICENSE) © 2024-PRESENT [Caven Ding](https://github.com/keyding)
