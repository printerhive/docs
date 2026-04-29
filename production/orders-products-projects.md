---
description: "Organize production work in Printerhive with orders, products, product variants, projects, plates, and queues."
---

# Orders, Products, and Projects

Printerhive can organize production work around real customer or shop workflows, not only around files.

## The difference between orders, products, and projects

Use these concepts differently:

- **Orders** are incoming customer or shop orders.
- **Products** are repeatable items, usually tied to SKUs or e-commerce products.
- **Product variants** represent different versions of the same product, such as size, color, or configuration.
- **Projects** are one-off or customer-specific work that does not fit a repeatable product structure.

This structure helps you avoid treating every print as a random file in a folder.

## Products

Products are useful when you print the same item repeatedly. A product can have assigned plates/files and production information, so future orders can move into production faster.

Use products for:

- e-shop items,
- standard replacement parts,
- repeatable client items,
- items with known material and print settings.

## Product variants

Variants help when one product has several printable versions. For example:

- different colors,
- different sizes,
- left/right versions,
- customer-specific options,
- bundles with different plate sets.

Assigning the correct files to the correct variant reduces mistakes when orders are imported.

## Projects

Projects are better for one-off work. Use them for:

- custom customer jobs,
- prototypes,
- internal experiments,
- jobs that do not have a stable SKU yet.

A project can still contain multiple plates and be moved to a print queue like a product.

## From order to queue

A typical order workflow looks like this:

1. Import or create an order.
2. Review order items.
3. Match items to products, variants, or project work.
4. Attach or verify plates/files.
5. Add selected items to a print queue.
6. Print, finish, and review history.

The important part is the review step. Imported shop data can be incomplete or inconsistent, especially around variants and SKUs.

## BOM and required materials

Some items can have required materials assigned. This helps check whether all needed materials are available before production starts.

Use this for products where missing inserts, magnets, screws, or specific filament can block the job.

## CSV exports and print sheets

Orders can be printed or exported for offline work. This is useful when production involves packing, manual post-processing, or multiple people.

## Good habits

- Keep product names close to the e-shop product names.
- Use SKUs consistently.
- Assign plates to products before orders arrive.
- Use variants instead of duplicating almost identical products.
- Use projects for one-off work until it becomes repeatable.
