# How to Perform a Factory Reset on Your Bambu Lab Printer After a Firmware Update

A firmware update on your Bambu Lab printer can sometimes lead to unexpected behavior or communication issues with third-party services like Printerhive. Performing a factory reset can often resolve these problems. This guide will walk you through the process.

## When to Perform a Factory Reset

The primary reason to perform a factory reset after a firmware update is to resolve communication issues with Printerhive. This can manifest in several ways:

*   The printer does not appear online in Printerhive.
*   Print jobs cannot be sent to the printer from Printerhive.
*   Printer status and data are not updating correctly in Printerhive.

While the main focus is on Printerhive connectivity, a factory reset can also be considered for:

*   Other persistent, unexpected printer behavior after a firmware update.
*   Preparing the printer for sale or transfer to a new owner (as it removes your account data from the machine).

## Factory Reset Procedure

**Important:** While a factory reset is designed to address software issues and typically preserves calibration data, it's always a good practice to note any custom settings you might have. The reset will erase user account information and Wi-Fi settings from the printer.

1.  On the printer's touch screen, navigate to **Settings**.
2.  Select **General**.
3.  Scroll down and tap on **Restore Factory Settings**.
4.  Confirm your decision to proceed with the reset. The printer will then restart.

## After the Reset

Once the printer has restarted:

1.  **Reconnect to Wi-Fi:** You will need to set up the Wi-Fi connection again through the printer's menu.
2.  **Switch to LAN Mode:** For optimal and direct communication with services like Printerhive, switch your printer to LAN mode. This setting is usually found in the network or connectivity settings on the printer.
3.  **Enable Developer Mode and LAN Only Liveview:** To ensure full functionality with local services and direct live view, enable Developer Mode and then activate "LAN Only Liveview". These options are typically accessible after enabling LAN mode, often within the same network settings area or a specific "Developer Options" menu.
4.  **Update Printer Settings in Printerhive:** After a factory reset, the printer's IP address and Access Code may change. Verify these values on your printer (usually in the network settings or connection information screen after enabling LAN mode). Then, edit your existing printer's settings within Printerhive and update the IP address and Access Code if they have changed. There is no need to remove and re-add the printer, which would result in the loss of historical data and statistics.
5.  **Verify Communication:** Check if the printer now appears online in Printerhive and if you can send print jobs and see its status correctly.

## Additional Notes

*   Performing a factory reset erases user-specific data, including your Bambu Lab account credentials stored on the printer and network configurations.