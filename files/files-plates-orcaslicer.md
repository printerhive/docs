---
description: "Use the Printerhive file library, folders, tags, plates, order item file picker, and OrcaSlicer workflow."
---

# Files, Plates, and OrcaSlicer

Printerhive stores print files in a shared library so you do not need to upload the same file for every printer or order.

## File library

The file library lets you:

- upload files,
- create folders,
- search files,
- filter by tags,
- view file details,
- download or rename files,
- move files between folders,
- delete files you no longer need.

Use folders for broad structure and tags for flexible filtering. For example, folders can follow product groups while tags mark material, customer, printer type, or priority.

## Plates

Many modern print files contain multiple plates. Printerhive can show plates separately so you can select the exact plate you want to print or assign to an item.

Plate details may include:

- plate number or name,
- print duration,
- filament weight,
- filament types and colors,
- cost information,
- linked product or project items,
- required materials.

This is important for 3MF files where one file may contain several printable parts or variants.

## Sending files to print

From a file or plate, you can usually choose between:

- **Send to queue:** add the job to a queue for later production.
- **Print now:** send the job to a selected printer immediately.

Before printing, verify printer model, nozzle, filament, quantity, and AMS/external spool selection.

## Using files in products, projects, and orders

The file picker can attach existing plates to:

- products,
- product variants,
- projects,
- order items.

This keeps production connected to real work. Instead of searching for the same file repeatedly, you can prepare a product or project once and reuse it when orders arrive.

See [Orders, products, and projects](/production/orders-products-projects).

## OrcaSlicer workflow

Printerhive supports workflows where OrcaSlicer sends a file directly into Printerhive. This is useful when you slice a model and want to move it straight into production without manually downloading and uploading the file again.

Typical flow:

1. Slice the model in OrcaSlicer.
2. Send or upload the file to Printerhive.
3. Review the imported file or plate.
4. Choose a printer or queue.
5. Start printing or schedule it for later.

If a slicer upload does not appear, check your account, selected printer/profile, and network connection.

## Practical naming rules

Good file names save time later. Use names that describe what the file is, not only when it was sliced.

Recommended pattern:

```text
product-or-project_part_material_nozzle_version.3mf
```

Examples:

```text
phone-stand_body_petg_04_v2.3mf
bracket-left_asa_06_v1.gcode
```

## Common mistakes

- Uploading the same file many times instead of reusing one library item.
- Mixing test files and production files in the same folder.
- Forgetting to check the selected plate in a multi-plate 3MF file.
- Starting a job without checking nozzle and material compatibility.
