---
description: "Install the Printerhive client on Windows, macOS, Raspberry Pi, or Linux and troubleshoot setup issues."
---

# Client Installation

Before proceeding with the installation, please ensure your hardware meets the [Hardware Requirements](./hardware-requirements.md). If you are installing on a Raspberry Pi, prepare it first using the [Prepare Raspberry Pi](./prepare-raspberry-pi.md) guide.

Printerhive now supports client installation on **Windows**, **macOS**, and **Raspberry Pi / Linux**. New installations do **not** require a client API key. You connect the client to your account in the browser: the client shows a short code, you enter it on the Printerhive website and choose the location there. The client never asks for your email or password, so it works the same whether you sign in with email, Google or Apple.

## Windows Installation

1.  **Open the Printerhive Guide:** Log in to the Printerhive web application and open the interactive installation guide.
2.  **Choose Windows:** In the client installation step, select **Windows**.
3.  **Download and Run the Installer:** Download the Windows installer and run the `Printerhive-client-setup.exe` file.
4.  **Connect in Browser:** Open the Printerhive client and click **Connect in browser**. Printerhive opens in your browser; sign in the way you usually do.
5.  **Enter the Code and Choose a Location:** In the browser, enter the code shown in the client, choose the location this Windows client should manage and click **Connect device**.
6.  **Continue Setup:** Once the client is connected, continue to [Connect Printer](./connect-printer.md).

:::tip Microsoft Defender
Microsoft Defender may show a warning on first launch. If you downloaded the installer from the Printerhive app, you can safely allow it to run.
:::

## macOS Installation

1.  **Open the Printerhive Guide:** Log in to the Printerhive web application and open the interactive installation guide.
2.  **Choose Mac:** In the client installation step, select **Mac**.
3.  **Download and Open the Installer:** Download the `.dmg` file and open it.
4.  **Install the App:** Drag Printerhive into the **Applications** folder.
5.  **Connect in Browser:** Open the Printerhive client and click **Connect in browser**. Printerhive opens in your browser; sign in the way you usually do.
6.  **Enter the Code and Choose a Location:** In the browser, enter the code shown in the client, choose the location this Mac client should manage and click **Connect device**.
7.  **Continue Setup:** Once the client is connected, continue to [Connect Printer](./connect-printer.md).

## Raspberry Pi / Linux Installation

1.  **Connect via SSH:** Access the command line of your device using SSH. Instructions for connecting from Windows, macOS, and Linux are included at the end of the [Preparing Raspberry Pi OS Lite guide](./prepare-raspberry-pi.md#_10-power-on-and-connect).

2.  **Run the Installation Script:** Log in to the Printerhive web application and follow the interactive installation guide. The Linux installation command is:

    ```bash
    curl -o install-printerhive.sh https://app.printerhive.com/install && bash install-printerhive.sh
    ```

3.  **Connect the Device to Your Account:** The installer does not ask for your email or password. Instead it shows a web address and a code:

    ```
    1. Open in a browser (computer or phone):  https://app.printerhive.com/activate
    2. Sign in to Printerhive if asked.
    3. Enter this code:  WDJB-MJHT
    4. Click Connect device.

    → Waiting for confirmation in your browser…
    ```

    *   Leave the terminal open. The code is valid for 15 minutes.
    *   On your computer or phone, open [https://app.printerhive.com/activate](https://app.printerhive.com/activate). If you are not signed in, sign in the way you usually do; you are then taken back to the **Connect a device** page.
    *   Enter the code from the terminal and click **Continue**. Lowercase letters and a missing dash do not matter.
    *   The page shows which device is asking to connect: its name (for example `raspberrypi`), platform, IP address and time. If you have more than one location, choose the one this device should connect to.
    *   Click **Connect device**. Click **Deny** only if you did not start the installation yourself, for example if someone sent you the code.
    *   Within a few seconds the terminal shows `✓ Connected to location: …` and the installation continues on its own.

    If the terminal says the code has expired or the request was denied, run the installation command again to get a new code.

4.  **Wait for Completion:** The installation process is quick. Most time is spent installing Docker and Docker Compose (if not already present). The Printerhive client itself installs almost instantly.

5.  **Installation Complete:** Once the script finishes, the Printerhive client is installed and running.

    The client will automatically:
    - Connect the selected location to your account
    - Scan your network for Bambu Lab printers
    - Add newly discovered printers to your account
    - Synchronize with existing printers in your account

    You can now close the SSH connection and manage your printers through the Printerhive web application.

## Troubleshooting Installation Issues

The following issues may occur during installation:

*   **Connection problem:** Ensure you are signed in to the correct Printerhive account in the browser and that the client device has internet access. If the code has expired, start the connection again to get a new code.
*   **No location available:** Create a location in Printerhive first, then start the connection again and select it in the browser.
*   **Wrong location selected:** Reopen the client setup and select the correct location, or reinstall/reconfigure the client if needed.
*   **Unstable internet connection:** The installation script downloads necessary packages and Docker images. If your internet connection is unstable or slow, a download error may occur, and the installation will fail. Ensure a stable internet connection throughout the installation.
*   **Insufficient SD card or disk space:** Make sure you have enough free space on your client device. Minimum Raspberry Pi SD card size requirements are listed in the [Hardware Requirements](./hardware-requirements.md) section.
*   **Permission issues on Linux:** The installation script requires `sudo` privileges for some operations.
*   **Power interruption:** A sudden power loss to the Raspberry Pi during installation can lead to an inconsistent state and installation failure.
*   **Previous failed installation:** If you are attempting to reinstall after a previous failure, fragments may remain on the system that cause conflicts. In such cases, the simplest solution might be to start with a fresh installation of Raspberry Pi OS.

If problems persist, we recommend checking the installation script or desktop client output for specific error messages that might indicate the cause of the problem.

If you encounter any issues or have questions during the process, feel free to join our community:

*   **Discord:** [Join our Discord server](https://discord.gg/AwNP6HwvMZ) 