---
description: "Troubleshoot Printerhive client installation, offline printers, Bambu LAN mode, camera issues, stuck jobs, queues, AMS, and filament warnings."
---

# Troubleshooting

Start with the symptom you see. Most issues are caused by network changes, printer firmware settings, client problems, or a mismatch between the job and the selected printer.

## Quick links

- [Client installation problems](/getting-started/client-installation#troubleshooting-installation-issues)
- [First printer connection problems](/getting-started/connect-printer#troubleshooting)
- [Bambu Lab camera setup](/guides/activating-camera-bambu-lab-x1-h2d#troubleshooting)
- [Print queues and jobs](/printing/print-queues-and-jobs)
- [Filament storage and AMS](/filament/filament-storage-and-ams)

## Printer is offline or disconnects often

Try these steps in order:

1. **Check the printer IP address.** If the router assigned a new IP address, update it in Printerhive.
2. **Use IP reservation.** Reserve a static IP for the printer in your router.
3. **Check LAN mode.** For Bambu Lab printers, verify LAN mode and Developer Mode if your firmware requires it.
4. **Check same network.** The printer and Printerhive client must be on the same local network.
5. **Check the client device.** Make sure the Raspberry Pi or other client device is powered on and connected.
6. **Restart in order:** printer, client device, then router if needed.

If this happens after a firmware update, check printer network and LAN settings first.

## Printer was connected before but stopped working

The most common causes are:

- printer IP address changed,
- LAN mode was disabled,
- Developer Mode is required after firmware update,
- client device lost Wi-Fi,
- router changed subnet or guest network settings,
- printer is on a different Wi-Fi than the client.

Fix the network first before changing Printerhive settings.

## Camera does not work

For Bambu Lab X1 and H2D, follow [Activating Camera for Bambu Lab X1 & H2D](/guides/activating-camera-bambu-lab-x1-h2d).

Also check:

- printer supports camera streaming,
- LAN camera/liveview setting is enabled,
- printer and client are on the same network,
- browser is not blocking the stream,
- the camera works in the printer's own interface.

## Job is stuck in preparing or does not start

Use reset from the job detail or queue actions. Resetting attempts to clear the stuck command and return the job to a manageable state.

If the same job gets stuck again:

1. try another small known-good file,
2. check printer state,
3. check client connection,
4. verify filament and AMS selection,
5. check whether the file is compatible with the selected printer and nozzle.

## Filament or AMS warning appears

Do not ignore filament warnings in production. Check:

- required material,
- required color,
- remaining spool weight,
- AMS tray assignment,
- external spool selection,
- nozzle and printer compatibility.

If the warning is expected, confirm it intentionally. If not, fix the spool/tray/job setup before printing.

## Order or product item cannot be printed

Check whether the item has a file or plate assigned. For product variants, make sure the selected variant has the correct files.

Also verify:

- quantity,
- selected plate,
- required material,
- printer compatibility,
- whether the item has been added to a queue.

See [Orders, products, and projects](/production/orders-products-projects).

## Restarting the Printerhive client

The simplest method is to restart the Raspberry Pi or client device.

Advanced users can restart only the Docker container:

```bash
sudo docker ps
sudo docker restart <container_id_or_name>
```

After restart, wait a few minutes for the client to reconnect and sync printer status.

## When asking for help

Include:

- printer model,
- printer firmware version if known,
- whether LAN mode is enabled,
- client device type,
- what changed recently,
- screenshot of the error or warning,
- whether other printers still work.

Use [Community and Support](/community/) if you cannot find the solution here.
