---
description: "Connect Buddy-based Prusa printers (CORE One, MK4/MK4S, MK3.9, MK3.5, XL, MINI) to Printerhive through Prusa Connect, without a Raspberry Pi or a local client."
---

# Prusa Printers via Prusa Connect (no Raspberry Pi)

Prusa printers with Buddy firmware have Prusa Connect built in. Printerhive can act as the Prusa Connect server for the printer: the printer connects straight to Printerhive over the internet. You need neither a Raspberry Pi nor a Printerhive client in your local network.

Status, controls, printing, and the dialogs on the printer display are then available in Printerhive.

## Supported printers

| Printer | Notes |
| --- | --- |
| CORE One | Chamber light and chamber fan control |
| CORE One L | Chamber light and chamber fan control; see the note below |
| MK4 / MK4S | |
| MK3.9 | |
| MK3.5 | |
| XL | Chamber light control |
| MINI | |

**Firmware 8.0.0 or newer is required.** A printer with older firmware is refused when it connects, and Printerhive shows which firmware it reported. Update the firmware first (for example from a USB drive as described by Prusa).

:::info CORE One L
Printerhive recognizes a connected CORE One L for the chamber light, chamber fan, and firmware updates, but the model list in the add form does not offer CORE One L yet. Contact [support](../community/index.md) before adding one.
:::

## Before you start

:::warning The printer leaves the official Prusa Connect
After you load the Printerhive connection file, the printer talks only to Printerhive. It is no longer available in the official Prusa Connect or the Prusa app.

To go back, register the printer again in its Prusa Connect menu (or load a `prusa_printer_settings.ini` that points to Prusa's Connect server). Printerhive does not switch the printer back for you.
:::

You need:

- a supported printer with firmware 8.0.0 or newer, connected to the internet (Wi-Fi or Ethernet),
- a USB drive that stays in the printer (the printer stores print files on it),
- a Printerhive account.

## Add the printer

### New printer

1. In Printerhive, click **Add printer** and choose **Prusa through Prusa Connect (no Raspberry Pi)**. The same option is offered in the setup guide.
2. Enter a **Printer name** and choose the **Model**. The model is refined from the printer when it first connects.
3. Click **Add and download the connection file**. Your browser downloads a ZIP file and the printer appears in your printer list.

### Printer already in Printerhive

You can move a Prusa printer you already use in Printerhive (for example on the Printerhive client with a Raspberry Pi) to Prusa Connect. Its history and settings stay.

1. Open the printer and go to the **Settings** tab.
2. In the **Prusa Connect through Printerhive** card, click **Download the connection file**.

Only the printer owner can do this.

If the printer was served by a Printerhive client, status and control move to Prusa Connect. A client in the same location keeps providing only the printer's camera, see [Camera](#camera).

## Load the connection file into the printer

1. Copy both files from the ZIP to the **root** of a USB drive: `prusa_printer_settings.ini` and `connect.der`.
2. Insert the USB drive into the printer and **leave it there**. The printer stores print files on it.
3. On the printer, open **Settings > Network > Prusa Connect** and choose **Load settings**.
4. If Prusa Connect was not enabled on the printer, enable it there too.

Within a minute the printer shows as connected in Printerhive.

The connection file is personal to the printer. Do not load it into another printer: a second device that tries to connect with the same file is refused.

## Connection status

The **Prusa Connect through Printerhive** card in the printer **Settings** tab shows:

- **Connected** or **Disconnected**,
- when the printer last connected,
- the firmware version the printer reported,
- the reason, if Printerhive refused the printer's last connection attempt.

A printer is shown as disconnected when Printerhive has not heard from it for about 90 seconds. If the printer was offline when a print finished, the print job's end time is approximate: it is the time the printer reconnected, unless the printer reported its own printing time.

## What works

**Monitoring**

- printer state, progress, and remaining time,
- nozzle, bed, and chamber temperatures (where the printer reports them),
- the loaded material, shown on the external spool card.

**Controls**

- home, move X/Y/Z, extrude and retract, motors off,
- nozzle and bed temperature,
- part cooling fan, and chamber fan on CORE One and CORE One L,
- print speed and flow,
- pause, resume, and cancel a print,
- chamber light on and off on CORE One, CORE One L, and XL. The brightness used for "on" is set in the printer edit form (**Chamber light brightness**, 1 to 100 %).

**Material**

Choosing a filament on the external spool card sets the material on the printer, and a material changed on the printer shows up on the card. Supported material presets: PLA, PETG, PCTG, ASA, ABS, PC, PVB, HIPS, PP, FLEX, PA.

**Printer dialogs**

When the printer display asks a question (for example that the loaded material does not match the file), Printerhive shows it with the same buttons. Answer it as you would on the printer.

**Printing**

- Start a print from Printerhive like on any other printer. Printerhive starts a print only when the printer has no job (idle, ready, finished, or stopped print) and no dialog is open.
- Send files from PrusaSlicer or OrcaSlicer with **Upload and print**. See [Upload from PrusaSlicer and OrcaSlicer](../files/slicer-upload.md).
- Print files are stored on the USB drive in the `PRINTERHIVE` folder.

**Queue start with Set Ready**

When the operator clears the bed and presses **Set Ready** on the printer, Printerhive starts the next print job from this printer's queue. Marking the printer ready in Printerhive sends **Set Ready** to the printer as well. The printer accepts it only when it is not printing (idle, finished, or stopped print) and no dialog is waiting on the display.

**Firmware updates**

The **Firmware** tab shows the installed version and offers the newest official Prusa firmware release for the model, if it is newer. Click **Update**: the printer downloads and installs it and restarts. The update is offered only while the printer is idle; it does not print meanwhile.

## Camera

The Buddy3D camera cannot be connected through Prusa Connect to Printerhive: the camera sends its images only to Prusa's servers. To see it in Printerhive, run the optional [Printerhive client](./client-installation.md) for the printer's location in Printerhive and enter the camera's RTSP address in the printer settings. The client then provides only the camera; status and control still come through Prusa Connect.

## Pair again

To create a new connection file (for example when a USB drive with the file was lost), open the printer **Settings** tab, find the **Prusa Connect through Printerhive** card (when the printer is connected, click **Pair again** to expand it) and click **Generate a new file**.

The new file invalidates the previous one. The printer stays disconnected until it loads the new file from the USB drive (repeat [Load the connection file into the printer](#load-the-connection-file-into-the-printer)).

## Troubleshooting

| Message or symptom | What to do |
| --- | --- |
| *The printer connected with firmware X. Printerhive supports firmware 8.0.0 and newer* | Update the printer firmware, then it connects on its own. |
| *The printer connected with an unknown file* | Download a new connection file and load it into the printer. |
| *The printer connected with an old file* | A newer file was generated. Load the newly downloaded file into the printer. |
| *Another device tried to connect with this printer's file and was refused* | The file was loaded into a second printer. Each printer needs its own file. |
| *The printer has not connected yet* | Load the file from the USB drive in **Settings > Network > Prusa Connect > Load settings** and check that Prusa Connect is enabled and the printer is online. |
| Printer shows **Disconnected** | Check the printer's network connection. It reconnects on its own when it is back online. |
| *Connecting through Prusa Connect is not available on this server yet* | The feature is not enabled on this Printerhive server. |
| A control or the light does nothing | *The printer cannot do this through Prusa Connect, or it is not connected.* Check the connection status; the chamber light and chamber fan exist only on the models listed above. |
