# Preparing Raspberry Pi OS Lite

Before installing the Printerhive client, you need a working Raspberry Pi with Raspberry Pi OS Lite installed. This guide shows how to use the official Raspberry Pi Imager tool.

We recommend using **Raspberry Pi OS Lite (64-bit)** based on Debian Bookworm or later.

## Requirements

*   A Raspberry Pi (Supported models listed in Client Installation guide)
*   An SD card (minimum 16 GB, Class 10 recommended)
*   A computer with an SD card reader
*   Internet connection

## Steps using Raspberry Pi Imager

### 1. Download and Install Raspberry Pi Imager
*   Go to the official [Raspberry Pi Software page](https://www.raspberrypi.com/software/).
*   Download and install the Raspberry Pi Imager for your operating system (Windows, macOS, or Ubuntu).

### 2. Prepare the SD Card
*   Insert the SD card into your computer's SD card reader.

### 3. Run Raspberry Pi Imager
*   Open the Raspberry Pi Imager application.

### 4. Choose Raspberry Pi Device
*   Click on "CHOOSE DEVICE" and select the model of your Raspberry Pi (e.g., Raspberry Pi 4, Raspberry Pi Zero 2 W).

### 5. Choose Operating System
*   Click on "CHOOSE OS".
*   Select "Raspberry Pi OS (other)".
*   Select "Raspberry Pi OS Lite (64-bit)". *Ensure it's based on Bookworm or newer if available, otherwise update it later.*

### 6. Configure Settings (Important for Headless Setup & Printer Communication)
*   Click the **Gear icon** (⚙️) or "NEXT" to access advanced options / customization.
*   **Set hostname:** We recommend changing the default hostname to `printerhive.local` for easier identification on your network, but you can keep the default `raspberrypi.local` or choose another.
*   **Enable SSH:** Check the box to "Enable SSH" and set a secure password. This is crucial for remote access.
*   **Configure Wi-Fi:** Check the box to "Configure wireless LAN". Enter your Wi-Fi network name (SSID) and password. **Important:** Your Raspberry Pi *must* be on the same network as your 3D printers for Printerhive to function. Since many printers (like Bambu Lab models) only use Wi-Fi, configuring Wi-Fi here is essential for most setups.
*   **Set locale settings:** Adjust language and keyboard layout if needed.
*   Click "SAVE".

### 7. Choose Storage
*   Click on "CHOOSE STORAGE".
*   Select your SD card from the list. **Be careful to select the correct drive, as all data on it will be erased.**

### 8. Write the Image
*   Click on "WRITE".
*   Confirm that you want to erase the SD card and continue.
*   The Imager will download the OS image and write it to the SD card. This may take several minutes.

### 9. Eject and Insert
*   Once the process is complete, safely eject the SD card from your computer.
*   Insert the SD card into your Raspberry Pi.

### 10. Power On and Connect
*   Connect your Raspberry Pi to power.
*   Give it a few minutes to boot up for the first time.
*   Once booted, you need to connect to its command line via SSH from your computer. You'll use the hostname and credentials you configured in [Step 6](#_6-configure-settings-important-for-headless-setup-printer-communication).

    **Connecting via SSH:**

    *   **On macOS or Linux:**
        1.  Open the **Terminal** application.
        2.  Type the following command, replacing `your_username` with the username you set (default is often `pi` or the one you specified) and `hostname` with the hostname you set (`printerhive.local` or `raspberrypi.local`):
            ```bash
            ssh your_username@hostname
            ```
            Example: `ssh pi@printerhive.local`
        3.  If it's your first time connecting, you might be asked to confirm the host's authenticity. Type `yes` and press Enter.
        4.  Enter the password you set for the user when prompted.

    *   **On Windows (10/11 or newer):**
        1.  Open **Command Prompt** or **PowerShell**.
        2.  Type the following command, replacing `your_username` and `hostname` as described above:
            ```bash
            ssh your_username@hostname
            ```
            Example: `ssh pi@printerhive.local`
        3.  If it's your first time connecting, confirm the host's authenticity by typing `yes` and pressing Enter.
        4.  Enter the password when prompted.

    *   **On Older Windows Versions (or using PuTTY):**
        1.  Download and install an SSH client like [PuTTY](https://www.putty.org/).
        2.  Open PuTTY.
        3.  In the "Host Name (or IP address)" field, enter the hostname (`printerhive.local` or `raspberrypi.local`).
        4.  Ensure the "Port" is set to `22` and "Connection type" is `SSH`.
        5.  Click "Open".
        6.  If it's your first time, you might see a security alert about the server's host key. Click "Accept" or "Yes".
        7.  A terminal window will open asking for your username. Enter it and press Enter.
        8.  Enter your password when prompted and press Enter.

    Once connected, you will see the command line prompt for your Raspberry Pi. 