# Client Installation

Before proceeding with the installation, please ensure your hardware meets the [Hardware Requirements](./hardware-requirements.md) and that you have prepared your Raspberry Pi device following the [Prepare Raspberry Pi](./prepare-raspberry-pi.md) guide.

> **Note for Advanced Users:** While this guide is primarily written for Raspberry Pi installation, the Printerhive client runs in Docker and can be installed on various other devices such as Synology NAS, virtual machines, Mac computers, servers, and other systems that support Docker. If you're technically proficient and prefer to use a different platform, you can adapt these instructions accordingly.

## Installation Steps

1.  **Connect via SSH:** Access the command line of your device using SSH. Instructions for connecting from Windows, macOS, and Linux are included at the end of the [Preparing Raspberry Pi OS Lite guide](./prepare-raspberry-pi.md#_10-power-on-and-connect).

2.  **Run the Installation Script:** Log in to the Printerhive web application and follow the interactive installation guide. The guide will provide you with a specific command to run on your Raspberry Pi via SSH.
    *   **Recommended Method:** Copy the command directly from the web application's installation guide. This command usually includes your unique API key, simplifying the process.
    *   **Alternative Method:** If you prefer or need to run a generic command, you can use the following. Note that if you use this method, you **will** need to manually provide the API key when prompted (see Step 3).
        ```bash
        curl -o install-printerhive.sh https://app.printerhive.com/install && bash install-printerhive.sh
        ```

3.  **Provide API Key (If Necessary):**
    *   If you used the **alternative method** in Step 2, the script will prompt you to enter your API key.
    *   **How to find your API key:**
        *   Go to [Locations](https://app.printerhive.com/user/locations) in your Printerhive account
        *   Click the eye icon (👁️) next to your API Key to reveal it
        *   Copy the key and paste it into the SSH terminal when prompted
    *   If you used the recommended command (Step 2), the key is already included.

4.  **Wait for Completion:** The installation process is quick. Most time is spent installing Docker and Docker Compose (if not already present). The Printerhive client itself installs almost instantly.

5.  **Installation Complete:** Once the script finishes, the Printerhive client is installed and running.

    The client will automatically:
    - Scan your network for Bambu Lab printers
    - Add newly discovered printers to your account
    - Synchronize with existing printers in your account

    You can now close the SSH connection and manage your printers through the Printerhive web application.

## Troubleshooting Installation Issues

The following issues may occur during installation:

*   **Incorrect or invalid API Key:** If you entered the API key manually (using the alternative installation method), ensure you copied it completely and without errors. You can find your API key at [Locations](https://app.printerhive.com/user/locations).
*   **Unstable internet connection:** The installation script downloads necessary packages and Docker images. If your internet connection is unstable or slow, a download error may occur, and the installation will fail. Ensure a stable internet connection for the Raspberry Pi throughout the installation.
*   **Insufficient SD card space:** Make sure you have enough free space on your SD card. Minimum SD card size requirements are listed in the [Hardware Requirements](./hardware-requirements.md) section.
*   **Permission issues:** The installation script requires `sudo` privileges for some operations. Run the command as instructed, typically with `sudo bash setup.sh`.
*   **Power interruption:** A sudden power loss to the Raspberry Pi during installation can lead to an inconsistent state and installation failure.
*   **Previous failed installation:** If you are attempting to reinstall after a previous failure, fragments may remain on the system that cause conflicts. In such cases, the simplest solution might be to start with a fresh installation of Raspberry Pi OS.

If problems persist, we recommend checking the installation script's output for specific error messages that might indicate the cause of the problem.

If you encounter any issues or have questions during the process, feel free to join our community:

*   **Discord:** [Join our Discord server](https://discord.gg/AwNP6HwvMZ) 