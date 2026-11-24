---
description: "Send G-code from PrusaSlicer or OrcaSlicer straight to a Prusa printer in Printerhive: slicer key, physical printer setup, Upload and print, checks, and behaviour by connection type."
---

# Upload from PrusaSlicer and OrcaSlicer

You can send a sliced file from PrusaSlicer or OrcaSlicer directly to a Prusa printer in Printerhive. The slicer talks to Printerhive in the cloud, so it works from any network. You do not need a Raspberry Pi or a local PrusaLink for the upload itself.

- **Upload** stores the file in your Printerhive file library.
- **Upload and print** stores the file. On a printer connected through Prusa Connect (coming soon), it also starts the print or puts it in the printer's queue after the checks pass; if a check fails, the file is only stored and the print is not queued. See [What happens after the upload](#what-happens-after-the-upload).

The setup is available for Prusa printers. For Bambu Lab and Klipper printers, keep using the existing OrcaSlicer workflow described in [Files, Plates, and OrcaSlicer](/files/files-plates-orcaslicer#orcaslicer-workflow).

## Before you start

You need:

- a Prusa printer added to Printerhive,
- permission to start prints on that printer (you own it, or it is shared with you with permission to start prints),
- PrusaSlicer 2.9 or OrcaSlicer with a Prusa printer profile.

## 1. Create a slicer key

1. Open the printer in Printerhive.
2. Go to the **Settings** tab. In the **PrusaSlicer** row, click **Connect with PrusaSlicer**.
   If the printer is shared with you, the same button is on the **Overview** tab.
3. In the dialog, click **Create slicer key**.
4. Copy the key right away.

The dialog also shows the address for this printer (**Hostname, IP or URL**). Copy it as well.

:::warning The key is shown only once
Printerhive shows the full slicer key only when it is created. Later the dialog shows only its first characters, so you can tell which key is active.
:::

How slicer keys work:

- You have **one active slicer key** for your account. The same key works for all printers you can send to; only the address differs per printer.
- **Create a new key** replaces the old one. The old key stops working immediately, so update it in every slicer that uses it.
- **Revoke key** disables the key without creating a new one.
- The slicer key is not your account API key. The account API key is refused for slicer uploads.

## 2. Set up PrusaSlicer

1. In PrusaSlicer, select the Prusa printer profile you print with.
2. Click the cog icon next to the printer selection and choose **Add physical printer**.
3. Fill in:
   - **Host type:** `PrusaLink`
   - **Hostname, IP or URL:** the address from Printerhive, for example `https://app.printerhive.com/slicer/<printer UUID>`
   - **Authorization type:** `API key`
   - **API key:** your slicer key
4. Click **Test**. A successful test confirms that the address and the key are correct.
5. Click **OK**.

:::info Why PrusaLink?
The host type is **PrusaLink** only because it is the one option in PrusaSlicer and OrcaSlicer that accepts a custom server address. The file goes to Printerhive in the cloud, not to a PrusaLink in your network.
:::

Create one physical printer in the slicer for each printer in Printerhive. Each one uses its own address and the same slicer key.

## 3. Set up OrcaSlicer

The setup is the same in OrcaSlicer:

1. Select a Prusa printer profile.
2. Open the printer connection settings (the network icon next to the printer).
3. Set **Host type** to `PrusaLink`, enter the Printerhive address as **Hostname, IP or URL**, and paste the slicer key as **API key**.
4. Click **Test**, then **OK**.

## 4. Send a file

After slicing, click **Send to printer** (in OrcaSlicer, the upload or print button for the physical printer) and choose:

- **Upload** to store the file in Printerhive only, or
- **Upload and print** to store it and request a print on that printer.

Supported files:

- `.gcode` and `.bgcode` (binary G-code),
- up to **256 MB**.

Uploaded files appear in your file library in the slicer folder (**Slicer**, or **OrcaSlicer** if you have uploaded from OrcaSlicer before). Previews are taken from the thumbnails in the file, including `.bgcode` files.

If you send the same file to the same printer again within a few minutes (a double click or a retry after a timeout), Printerhive treats it as the same upload. It does not store a second copy or create a second print job.

## What happens after the upload

What **Upload and print** does depends on how the printer is connected to Printerhive.

| Printer connection | Upload and print |
| --- | --- |
| Prusa via Prusa Connect through Printerhive (coming soon), printer idle or ready | After the [checks](#checks-before-a-print-starts) pass, the print starts right away if the printer is available. If the printer is reserved or another start is pending, the print job waits in this printer's queue. |
| Prusa via Prusa Connect through Printerhive (coming soon), printer connected but busy or not ready | After the [checks](#checks-before-a-print-starts) pass, the print job waits in this printer's queue. It starts when the operator presses **Set Ready** on the printer, or marks the printer ready in Printerhive. |
| Prusa on the Printerhive client (PrusaLink, Raspberry Pi) | The file is uploaded only. Start the print in Printerhive. The slicer shows: *"The file is in Printerhive, start the print in the app."* |

A printer that reports a finished or stopped print is not treated as free: the last part may still be on the bed. The job waits in the queue until the printer is set ready.

The print always goes to the printer in the address. Printerhive does not move it to another printer.

:::info Prusa Connect through Printerhive is coming soon
Connecting Prusa printers to Printerhive through Prusa Connect, without a Raspberry Pi, is not available yet. Until then, Prusa printers are connected through the Printerhive client, and **Upload and print** stores the file for you to start in Printerhive.
:::

## Checks before a print starts

These checks apply to printers connected through Prusa Connect through Printerhive, which is **coming soon**. On a printer connected through the Printerhive client, **Upload and print** only stores the file, and you start the print in Printerhive.

Before **Upload and print** starts or queues a print on a Prusa Connect printer, Printerhive checks the file against the printer:

- **Printer model:** the file must be sliced for the model of this printer.
- **Nozzle diameter:** the file's nozzle diameter must match a nozzle set for this printer in Printerhive. Only the diameter is compared; nozzle variants such as high flow do not matter.
- **Material type:** the material in the file (for example PLA or PETG) must match the material the printer reports as loaded. On a printer connected through Prusa Connect, setting the filament on the external spool card in Printerhive also sets it on the printer.

The file must contain the printer model, nozzle diameter, and material. PrusaSlicer writes these when you slice with a Prusa printer profile.

If a check fails, the file is still stored in Printerhive, but the print does not start. The slicer shows an error such as:

- *"The file is stored in Printerhive, the print did not start: the file needs PETG, printer CORE One 1 has PLA. Change the filament and start the print in Printerhive."*
- *"... set the filament on printer CORE One 1 in Printerhive, then start the print there."* (the printer reports no material)
- *"... it was sliced for MK4S, which is not the model of printer CORE One 1."*
- *"... it was sliced for a 0.6 mm nozzle, printer CORE One 1 has a different nozzle in Printerhive."*
- *"... the file does not say its printer model, nozzle diameter or material. Slice it in PrusaSlicer with a Prusa printer profile and send it again."*
- *"... Printerhive does not know the material X. Start the print in Printerhive."*

If the printer is offline, Printerhive may not be able to determine its loaded material. The file is then stored, but the print may not be queued.

A job that waits in the queue is checked again right before it starts. If the filament on the printer was changed in the meantime and no longer matches, the job is not started.

## Troubleshooting

| Message in the slicer | What to do |
| --- | --- |
| Invalid Printerhive slicer key | Create a slicer key in the printer settings and paste it into the slicer. The account API key does not work here. If you created a new key, the old one no longer works. |
| Printer not found in this Printerhive account | Copy the address again from the printer in Printerhive. You must own the printer or have permission to start prints on it. |
| Only G-code can be sent from the slicer | Export `.gcode` or `.bgcode`. Upload other files (for example 3MF) in Printerhive. |
| The file is too large | Files over 256 MB cannot be sent from the slicer. Upload them in Printerhive. |
| The file is stored in Printerhive, the print did not start | See [Checks before a print starts](#checks-before-a-print-starts). The file is already in your library; start it from Printerhive after fixing the cause. Do not send it again. |

## Bambu Lab and Klipper printers

The existing OrcaSlicer upload for Bambu Lab printers (the `/orcaslicer/` address) keeps working unchanged. Klipper printers keep their OrcaSlicer setup in the printer settings. See [Files, Plates, and OrcaSlicer](/files/files-plates-orcaslicer#orcaslicer-workflow).
