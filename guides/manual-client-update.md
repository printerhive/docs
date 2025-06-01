# Manual Printerhive Client Update

Under certain circumstances, a manual update of the Printerhive client running on your Raspberry Pi may be necessary. This is typically for security reasons or to enable specific features that cannot be updated remotely, such as video streaming for H2D, X1, and Klipper printers.

**Important:**
*   This manual update primarily affects video streaming functionality. Other client features will continue to work even if you don't perform this update.
*   If you do not perform this update, video streaming for the mentioned printer types may not be available.

## Update Procedure

Follow these steps to manually update your Printerhive client:

1.  **Connect to your Raspberry Pi via SSH:**
    Access the command line of your Raspberry Pi. If you need instructions on how to do this, please refer to the [Preparing Raspberry Pi OS Lite guide](./../getting-started/prepare-raspberry-pi.md#_10-power-on-and-connect).

2.  **Run the Update Script:**
    Execute the following single command in your SSH terminal. This command will first navigate to the `printerhive-node-client` directory and then run the `manual_update.sh` script.

    ```bash
    cd ~/printerhive-node-client && ./manual_update.sh
    ```

    The update process can take anywhere from 2 to 15 minutes, depending on the age of your client installation and the number of files that need to be updated. Please be patient and allow the script to complete.

3.  **Verify the Update (Optional):**
    After the script finishes, you can verify if the video streaming feature is now working as expected for your H2D, X1, or Klipper printer.

## Troubleshooting

*   If the update script fails, please double-check that you are connected to the Raspberry Pi, that the `printerhive-node-client` directory exists in your home folder (`~/`), and that the `manual_update.sh` script is present and executable within that directory.
*   If issues persist, you may need to consult further support channels (e.g., Discord or community forums).

Remember, not performing this update will only impact specific features like video streaming for certain printers. 