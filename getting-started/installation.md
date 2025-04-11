# Client Installation

## Minimum Requirements

*   SD card minimum 16 GB, class 10 speed
*   Supported Operating Systems:
    *   Debian GNU/Linux 12 (bookworm) and higher
    *   CB1 V3.0.0 and higher
*   Node.js 18.17.0 and higher

### Note for Bambulab Printers

To fully utilize our system and your printers, you must set your printers to **LAN mode**.

## Supported Devices

*   Raspberry Pi 3 and higher
*   Raspberry Pi Zero 2 W
*   BTT CB1

**Unsupported:** RPi Zero 1 W

## Installation Guide

1.  **Prepare Your Device:** Ensure you have a supported device (like a Raspberry Pi) with a compatible operating system installed. If you haven't set up your Raspberry Pi yet, follow the [Preparing Raspberry Pi OS Lite](./prepare-raspberry-pi.md) guide.

2.  **Connect via SSH:** Access the command line of your device using SSH. Instructions for connecting from Windows, macOS, and Linux are included at the end of the [Preparing Raspberry Pi OS Lite guide](./prepare-raspberry-pi.md#_10-power-on-and-connect).

3.  **Run the Installation Script:** Once connected via SSH, execute the following command to download and run the Printerhive client installer:

    ```bash
    curl -o setup.sh https://app.printerhive.com/setup && bash setup.sh
    ```

4.  **Find and Enter API Key:**
    *   You need an API key to link the client to your Printerhive account.
    *   **Prerequisite:** Make sure you have completed the [Account Registration](./registration.md) and confirmed your email address.
    *   Log in to your Printerhive account and navigate to the **Locations** section: [https://app.printerhive.com/location](https://app.printerhive.com/location)
    *   Find your location and click the **eye icon** (👁️) next to the API Key to reveal it.
    *   **Double-click** the revealed API key to select the entire key, then copy it (e.g., using `Ctrl+C` or `Cmd+C`).
    *   When prompted by the installation script in your terminal, paste the copied **API key** (e.g., using right-click or `Shift+Insert` or `Cmd+V`, depending on your terminal) and press Enter.

5.  **Wait for Completion:** The installation process may take several minutes, potentially up to 20 minutes on devices with slower SD cards. Wait for it to finish.

6.  **Installation Complete:** Once the script finishes, the Printerhive client is installed and running. You can close the SSH connection.

## Next Steps

Now that the client is installed, the next step is to [Connect Your First Printer](./connect-printer.md).

If you encounter any issues or have questions during the process, feel free to join our community:

*   **Discord:** [Join our Discord server](https://discord.gg/AwNP6HwvMZ) 
