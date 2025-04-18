# Client Installation

Before proceeding with the installation, please ensure your hardware meets the [Hardware Requirements](./hardware-requirements.md) and that you have prepared your Raspberry Pi device following the [Prepare Raspberry Pi](./prepare-raspberry-pi.md) guide.

## Installation Guide

1.  **Connect via SSH:** Access the command line of your device using SSH. Instructions for connecting from Windows, macOS, and Linux are included at the end of the [Preparing Raspberry Pi OS Lite guide](./prepare-raspberry-pi.md#_10-power-on-and-connect).

2.  **Run the Installation Script:** Once connected via SSH, execute the following command to download and run the Printerhive client installer:

    ```bash
    curl -o setup.sh https://app.printerhive.com/setup && bash setup.sh
    ```

3.  **Find and Enter API Key:**
    *   You need an API key to link the client to your Printerhive account.
    *   **Prerequisite:** Make sure you have completed the [Account Registration](./registration.md) and confirmed your email address.
    *   Log in to your Printerhive account and navigate to the **Locations** section: [https://app.printerhive.com/location](https://app.printerhive.com/location)
    *   Find your location and click the **eye icon** (👁️) next to the API Key to reveal it.
    *   **Double-click** the revealed API key to select the entire key, then copy it (e.g., using `Ctrl+C` or `Cmd+C`).
    *   When prompted by the installation script in your terminal, paste the copied **API key** (e.g., using right-click or `Shift+Insert` or `Cmd+V`, depending on your terminal) and press Enter.

4.  **Wait for Completion:** The installation process may take several minutes, potentially up to 20 minutes on devices with slower SD cards (refer to the [Hardware Requirements](./hardware-requirements.md#supported-devices) for performance examples).

5.  **Installation Complete:** Once the script finishes, the Printerhive client is installed and running. You can close the SSH connection.

If you encounter any issues or have questions during the process, feel free to join our community:

*   **Discord:** [Join our Discord server](https://discord.gg/AwNP6HwvMZ) 