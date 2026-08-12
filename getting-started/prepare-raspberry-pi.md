---
description: "Prepare Raspberry Pi OS Lite for the Printerhive client using Raspberry Pi Imager and SSH."
---

# Preparing Raspberry Pi OS Lite

Before installing the Printerhive client on a Raspberry Pi, you need a working Raspberry Pi with Raspberry Pi OS Lite installed. This guide uses the current Raspberry Pi Imager workflow. If you are installing on Windows or macOS, skip this page and use the desktop installer from the Printerhive guide.

Use the current **Raspberry Pi OS Lite (64-bit)** release. Printerhive supports the current Raspberry Pi OS release and Raspberry Pi OS based on Debian Bookworm or later.

## Requirements

*   A [supported Raspberry Pi](./hardware-requirements.md#supported-raspberry-pi-models)
*   An SD card (minimum 16 GB, Class 10 recommended)
*   A computer with an SD card reader
*   Internet connection

## Install Raspberry Pi OS Lite

### 1. Install Raspberry Pi Imager

Download and install the latest Raspberry Pi Imager for Windows, macOS, or Ubuntu from the official [Raspberry Pi Software page](https://www.raspberrypi.com/software/).

### 2. Select the device, operating system, and storage

1.  Insert the SD card into your computer.
2.  Open Raspberry Pi Imager.
3.  In the **Device** tab, select your Raspberry Pi model, then select **Next**.
4.  In the **OS** tab, select **Raspberry Pi OS (other)** and then **Raspberry Pi OS Lite (64-bit)**. Choose the current release offered by Imager, then select **Next**.
5.  In the **Storage** tab, select your SD card, then select **Next**.

:::danger Check the selected storage
Writing the image permanently erases the selected storage device. Verify that you selected the correct SD card before continuing.
:::

### 3. Customise Raspberry Pi OS

The **Customisation** tab opens after you select the storage device. Configure the following settings before writing the image:

1.  **Hostname:** Enter a hostname containing only letters, numbers, and hyphens. We recommend `printerhive`, which is normally reachable on your local network as `printerhive.local`.
2.  **Localisation:** Select your location, time zone, and keyboard layout. This also sets the Wi-Fi regulatory domain.
3.  **User:** Create an administrator username and a secure password. Remember this username; you will use it to connect over SSH. Raspberry Pi OS no longer creates a default `pi` user automatically.
4.  **Wi-Fi:** Enter the SSID and password of the network used by your printers. The Raspberry Pi must be connected to the same local network as the printers managed by Printerhive.
5.  **Remote Access:** Enable **SSH** and choose password authentication or public-key authentication. Password authentication uses the username and password configured in the **User** tab.

Raspberry Pi Connect is not required for Printerhive installation.

### 4. Write the image

1.  Review the selected device, operating system, storage, and customisation settings.
2.  Start writing the image and confirm that the SD card can be erased.
3.  Wait for Imager to finish writing and verifying the image.
4.  Safely eject the SD card and insert it into your Raspberry Pi.

## Power on and connect with SSH

1.  Connect the Raspberry Pi to power.
2.  Allow a few minutes for the first boot and network connection.
3.  Open Terminal on macOS or Linux, or PowerShell/Command Prompt on Windows 10 or 11.
4.  Connect using the username and hostname configured in Imager:

    ```bash
    ssh your_username@printerhive.local
    ```

    Replace `your_username` if you chose a different username. If you used another hostname, replace `printerhive.local` as well.

5.  On the first connection, verify the hostname and accept the SSH host key prompt by entering `yes`.
6.  Enter the password configured in Imager, unless you selected public-key authentication.

:::tip If the hostname does not work
Check your router's connected-device list to find the Raspberry Pi IP address, then connect with `ssh your_username@IP_ADDRESS`. Confirm that the computer, Raspberry Pi, and printers are on the same local network.
:::

Once the command-line prompt appears, continue with [Client Installation](./client-installation.md). The Linux installation command does not require a client API key; setup uses secure Printerhive login and location selection.
