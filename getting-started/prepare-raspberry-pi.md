---
description: "Prepare Raspberry Pi OS Lite for the Printerhive client using Raspberry Pi Imager and SSH."
---

# Preparing Raspberry Pi OS Lite

Before installing the Printerhive client on a Raspberry Pi, you need a working Raspberry Pi with Raspberry Pi OS Lite installed. This guide uses the official Raspberry Pi Imager tool. If you are installing on Windows or macOS, skip this page and use the desktop installer from the Printerhive guide.

We recommend the current **Raspberry Pi OS Lite (64-bit)** release.

## Requirements

*   A supported Raspberry Pi listed in [Hardware Requirements](./hardware-requirements.md)
*   An SD card (minimum 16 GB, Class 10 recommended)
*   A computer with an SD card reader
*   Internet connection

## Steps using Raspberry Pi Imager

### 1. Download and install Raspberry Pi Imager

*   Go to the official [Raspberry Pi Software page](https://www.raspberrypi.com/software/).
*   Download and install Raspberry Pi Imager for your operating system.

### 2. Select the device, operating system, and storage

1.  Insert the SD card into your computer and open Raspberry Pi Imager.
2.  On the **Device** tab, select your Raspberry Pi model.
3.  On the **OS** tab, choose **Raspberry Pi OS (other)** and then **Raspberry Pi OS Lite (64-bit)**.
4.  On the **Storage** tab, select your SD card. **All data on the selected storage device will be erased. Make sure you choose the correct drive.**

### 3. Configure the operating system

Open the **Customisation** tab and configure the Raspberry Pi before writing the image:

*   **Hostname:** We recommend `printerhive`. The device should then be available on your local network as `printerhive.local`. You can choose another hostname if needed.
*   **Username and password:** Create a username and a strong password. Raspberry Pi OS no longer provides a default `pi` user, so remember the username you choose.
*   **Wi-Fi:** Enter your Wi-Fi network name (SSID), password, and country. The Raspberry Pi must be connected to the same local network as your 3D printers. If you will use Ethernet instead, Wi-Fi configuration is optional.
*   **Locale:** Set the correct time zone and keyboard layout.
*   **SSH:** Enable SSH and select password authentication, or configure public-key authentication if you already use SSH keys.

Review the settings and apply the customisation.

### 4. Write the image

1.  Start writing the image.
2.  Confirm that the selected SD card can be erased.
3.  Wait while Raspberry Pi Imager downloads, writes, and verifies the operating system.
4.  When the process is complete, safely eject the SD card.

### 5. Start the Raspberry Pi

1.  Insert the SD card into the Raspberry Pi.
2.  Connect the Raspberry Pi to power.
3.  Allow a few minutes for the first boot and network connection.

### 6. Connect via SSH

Open Terminal on macOS or Linux, or PowerShell/Command Prompt on Windows, and run:

```bash
ssh your_username@printerhive.local
```

Replace `your_username` with the username you created in the **Customisation** tab. If you chose a different hostname, replace `printerhive.local` as well.

The first time you connect, SSH asks you to confirm the device's host key. Verify the hostname, type `yes`, and then enter the password you configured.

If the hostname cannot be resolved, find the Raspberry Pi's IP address in your router and connect with:

```bash
ssh your_username@192.168.1.100
```

Replace the example IP address with the actual address of your Raspberry Pi.

::: details Using PuTTY on older Windows versions
1.  Download and install [PuTTY](https://www.putty.org/).
2.  Enter `printerhive.local` (or the Raspberry Pi's IP address) in **Host Name**.
3.  Keep port `22` and connection type **SSH**, then select **Open**.
4.  Accept the host key prompt after verifying the hostname, then enter the username and password you configured.
:::

Once connected, continue with [Client Installation](./client-installation.md). The Linux installation uses secure Printerhive login and location selection; it does not require a client API key.
