---
description: "Connect e-commerce workflows to Printerhive with Shopify, WooCommerce, Upgates, Allegro, CSV exports, and imported orders."
---

# E-commerce Integrations

Printerhive can connect shop orders with print production. The goal is to reduce manual copying between your e-shop, file library, products, and print queues.

## What integrations are for

Use integrations when you want to:

- import orders,
- connect shop products to printable products,
- prepare production from order items,
- export order data,
- keep customer work organized,
- reduce manual copy-paste.

An integration does not replace production review. It brings the order into Printerhive; you still decide what should be printed, on which printer, and from which files.

## Shopify

Shopify integration connects a Shopify store to Printerhive so orders can become production work.

Typical setup:

1. Open the Shopify integration in Printerhive.
2. Enter or confirm the shop domain.
3. Install/connect the Printerhive app.
4. Review imported orders.
5. Match order items to products or variants.

If the store is connected correctly, the integration page shows the connected store name or domain.

## WooCommerce

WooCommerce integration is useful for WordPress shops. It uses store credentials and webhooks so Printerhive can receive order information.

When setting it up, prepare:

- store URL,
- consumer key,
- consumer secret,
- webhook URL from Printerhive,
- order status rules used by your shop.

After connecting, test with a small order before trusting it for production.

## Upgates

Upgates support is aimed at shops running on the Upgates platform. Printerhive includes public Upgates connection and feature pages, plus app-side flows for linking the shop and importing orders/products.

Recommended workflow:

1. Connect the Upgates shop.
2. Verify the shop identity in Printerhive.
3. Import or receive orders.
4. Match products and variants.
5. Move prepared order items to the print queue.

## Allegro and marketplace workflows

Marketplace connections such as Allegro may need marketplace-specific setup and permissions. Use them only when you already know how products and SKUs map to your production items.

If the mapping is unclear, import the order first and manually connect it to a product or project.

## CSV configurations

CSV configurations are useful when you need custom exports for another tool, packing workflow, accounting, or manual processing.

Use clear names for CSV configurations so your team knows which export is used for which process.

## Troubleshooting imports

If orders do not appear:

1. Check whether the shop is still connected.
2. Check credentials or app permissions.
3. Verify webhook configuration.
4. Confirm order status filters.
5. Test with a small new order.
6. Check whether the order exists but is not matched to a product yet.

## Production safety

Imported orders should not automatically bypass production checks. Always review:

- quantity,
- product variant,
- selected plate,
- material,
- color,
- printer compatibility,
- shipping or customer notes.
