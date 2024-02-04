# The Lemon Squeezy JavaScript/TypeScript SDK

[![NPM Version](https://img.shields.io/npm/v/%40heybrostudio%2Flemonsqueezy.js?label=&color=%230d9488)](https://www.npmjs.com/package/@heybrostudio/lemonsqueezy.js)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?label=)](https://opensource.org/licenses/MIT)
[![Static Badge](https://img.shields.io/badge/Functions_Usage-%237c3aed)](https://github.com/heybrostudio/lemonsqueezy.js/wiki)
![APIs Count](https://img.shields.io/badge/56_Functions-%232563eb)

Dear developers,

I am pleased to announce that my personal repository has been successfully merged into the official repository! This is a very exciting and important milestone.

As a result, my personal repository will be archived. This means that I will no longer maintain or update this repository, and all future development work will transition to the official repository.

Furthermore, with the archival of the repository, the associated npm packages will also be archived. This means that no new versions will be released in the future, and existing versions will continue to be available but will not receive feature updates or bug fixes.

I want to express my gratitude for your continued interest and support of my personal repository. I especially want to thank those who have actively contributed code, submitted issues, and provided suggestions. Without your support, the success of this repository would not have been possible.

Please note that new code and issue tracking will now take place in the official repository. I encourage you to redirect your focus and contribution efforts to the official repository to advance the project's development with a wider developer community.

If you have any questions or concerns, please feel free to reach out to me. Thank you for your interest and support in my repository.

Thank you once again!

Best regards,
Caven Ding.

Additional information, please refer to the official repository: https://github.com/lmsqueezy/lemonsqueezy.js

## Introduction

This is the unofficial JavaScript/TypeScript SDK for Lemon Squeezy.

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

For more functions usage, see [Wiki](https://github.com/heybrostudio/lemonsqueezy.js/wiki).

## Bundle size

<details>
  <summary>Click to view</summary>

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

</details>

## Contributing

See the [Contributing Guide](https://github.com/heybrostudio/lemonsqueezy.js/blob/main/CONTRIBUTING.md)

## Thanks

This project is heavily inspired by the following awesome projects.

- [lmsqueezy/lemonsqueezy.js](https://github.com/lmsqueezy/lemonsqueezy.js)

## License

[MIT License](https://github.com/heybrostudio/lemonsqueezy.js/blob/main/LICENSE) © 2024-PRESENT [Caven Ding](https://github.com/keyding)
