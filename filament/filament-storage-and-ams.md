---
description: "Manage filament spools, stock, AMS trays, QR labels, low-filament warnings, and filament mismatch checks in Printerhive."
---

# Filament Storage and AMS

Filament tracking helps prevent failed prints, wrong colors, and half-used spools with unknown remaining weight.

## Filament storage

Use filament storage to keep records of spools and stock. A spool can include information such as:

- material type,
- manufacturer,
- color name,
- remaining weight,
- location,
- tags,
- favorite state,
- threshold for low-stock warnings.

The goal is simple: before a print starts, Printerhive should know whether the right material is actually available.

## Adding and editing spools

When adding a spool, enter the most useful data first:

1. material type,
2. color,
3. remaining weight,
4. location,
5. manufacturer or custom filament name.

You can update weight after prints or stock movements. If you use QR labels, updating the correct spool becomes faster.

## QR labels

QR labels make physical filament management easier. Use them for:

- spool labels,
- AMS tray labels,
- printer slot labels,
- quick lookup from a phone or tablet.

A good workflow is to label a spool when it enters storage, then scan it whenever it is loaded into a printer or AMS slot.

## AMS trays

For Bambu Lab printers with AMS, Printerhive can work with tray information such as material, color, and slot assignment.

AMS tracking is useful for:

- matching a job to the correct tray,
- avoiding wrong-color prints,
- seeing what is currently loaded,
- managing external spool situations,
- detecting filament mismatch before printing.

## Filament mismatch warnings

Printerhive may warn you when the selected printer or AMS setup does not match the print job. Common warnings include:

- required material is different from loaded material,
- required color does not match,
- remaining filament is too low,
- nozzle or printer compatibility looks wrong.

You can decide how strict the workflow should be. In production, it is usually safer to require confirmation before printing with a mismatch.

## K-factor and custom filaments

When using custom filament profiles, record practical details such as material type, color, and K-factor if you use it. This helps keep future prints consistent, especially when several people use the same farm.

## Inventory reports and alerts

Filament storage can also support inventory reports and low-stock alerts. These are useful when you need to plan buying material before production stops.

Use alerts for materials that are critical for current orders, not for every random spool. Too many alerts become noise.

## Recommended workflow

1. Add spools when they arrive.
2. Print QR labels for important spools.
3. Assign spools or trays when they are loaded.
4. Check mismatch warnings before batch printing.
5. Review stock before accepting larger orders.
