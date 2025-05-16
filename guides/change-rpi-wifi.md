# Changing Wi-Fi Configuration on Raspberry Pi

If you need to change the Wi-Fi network your Raspberry Pi is connected to after installing the Printerhive client, follow these steps. This is relevant if, for example, you change your Wi-Fi router, Wi-Fi password, or move the Raspberry Pi to a different network.

**Important Notice:** After changing the Raspberry Pi's network configuration, ensure your 3D printers are also connected to the same new network. The Printerhive client and printers must be on the same local network to communicate.

There are several ways to change Wi-Fi settings on Raspberry Pi OS Lite. Here are two common methods:

## Method 1: Using `raspi-config` (recommended for simplicity)

`raspi-config` is a Raspberry Pi configuration tool that simplifies many common tasks.

1.  **Connect to Raspberry Pi:**
    *   If the RPi still has access to the original network, connect via SSH.
    *   If the RPi has lost network connectivity, you will need to temporarily connect a keyboard and monitor.

2.  **Run `raspi-config`:**
    In the terminal, enter the command:
    ```bash
    sudo raspi-config
    ```

3.  **Navigate to network options:**
    *   Select "System Options" or a similar item.
    *   Then select "Wireless LAN".
    *   If prompted to enter your country, select it (e.g., `US` for the United States, `GB` for Great Britain).

4.  **Enter the new Wi-Fi network name (SSID):**
    *   You will be prompted to enter the SSID (your Wi-Fi network name). Type it and confirm.

5.  **Enter the Wi-Fi password:**
    *   Enter the passphrase for your Wi-Fi network and confirm.

6.  **Exit `raspi-config`:**
    *   Select "Finish" and confirm. You may be asked if you want to reboot. A reboot is usually necessary for the changes to take effect.

After rebooting, the Raspberry Pi should connect to the new Wi-Fi network.

## Method 2: Manually editing the configuration file (for more advanced users)

This method involves directly editing the file that stores Wi-Fi configurations.

1.  **Connect to Raspberry Pi:** (Same as in Method 1)

2.  **Open the configuration file:**
    In the terminal, enter the command to open the file in a text editor (e.g., `nano`):
    ```bash
    sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
    ```

3.  **Edit or add the network configuration:**
    The file should contain lines similar to these:
    ```
    ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
    update_config=1
    country=US # Replace with your country code

    network={
        ssid="YOUR_WIFI_SSID"
        psk="YOUR_WIFI_PASSWORD"
    }
    ```
    *   Change the `ssid` and `psk` values to your new Wi-Fi network name and password.
    *   If you have multiple `network={...}` blocks, ensure you are editing the correct one, or remove old configurations if they are no longer needed.

4.  **Save the file and close the editor:**
    *   In `nano`: Press `Ctrl+X`, then `Y` (for yes), and `Enter` to confirm the filename.

5.  **Apply changes:**
    You can either reboot the Raspberry Pi:
    ```bash
    sudo reboot
    ```
    Or try to reload the configuration without rebooting (this may not always work reliably for all changes):
    ```bash
    sudo wpa_cli -i wlan0 reconfigure
    ```
    A reboot is generally the more reliable method.

## Verifying Connection

After rebooting or reconfiguring, verify that the Raspberry Pi has an IP address on the new network:
```bash
ip addr show wlan0
```
Or:
```bash
ifconfig wlan0
```
You should see an IP address assigned to your Wi-Fi card (`wlan0`).

If the connection fails, carefully check the network name (SSID) and password. They are case-sensitive. 