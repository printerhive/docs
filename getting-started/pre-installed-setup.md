# Pre-installed Raspberry Pi Setup

This guide is for customers who purchased a Raspberry Pi with the PrinterHive client pre-installed. Your device comes ready to use with the client software and your account API key already configured.

## What's in the Package

- **Raspberry Pi** (Zero 2 W or Pi 5, depending on your order)
- **SD card** with PrinterHive client pre-installed
- **Power supply**

## Setup Steps

### 1. Connect the Power

Insert the SD card into your Raspberry Pi (if not already inserted) and connect the power supply. The device will boot up automatically.

Wait approximately 1-2 minutes for the device to fully start.

### 2. Connect to the PrinterHive Hotspot

Once the Raspberry Pi has started, it will create a Wi-Fi hotspot:

- **Network name:** `PrinterHive Client`
- **Password:** `printerhive`

Connect to this network using your phone, tablet, or computer.

### 3. Configure Your Home Wi-Fi

After connecting to the hotspot, a configuration page should appear automatically (similar to hotel Wi-Fi login pages).

**If the configuration page does not appear automatically:**

Open a web browser and navigate to:

```
http://192.168.220.1
```

Or scan this QR code:

![QR code for setup page](/qr-setup.png)

On the configuration page:

1. Enter your home Wi-Fi network name (SSID)
2. Enter your Wi-Fi password
3. Save the settings

### 4. Restart the Raspberry Pi

After saving your Wi-Fi settings, we recommend manually restarting the Raspberry Pi:

1. Disconnect the power supply
2. Wait 5 seconds
3. Reconnect the power supply

The device will now connect to your home Wi-Fi network instead of creating a hotspot.

### 5. Verify the Connection

Once the Raspberry Pi connects to your network, it will automatically appear in your PrinterHive account.

Go to [Locations](https://app.printerhive.com/user/locations) to verify that your client is online.

## Adding Printers

Your printers must be connected to the **same Wi-Fi network** as your Raspberry Pi.

For detailed instructions on connecting your printer, see the [Connect Printer](./connect-printer.md) guide.

## Troubleshooting

### The hotspot does not appear

- Ensure the SD card is properly inserted
- Wait at least 2 minutes after powering on
- Try disconnecting and reconnecting the power supply

### The configuration page does not open automatically

This is a known issue with some devices. Simply open a browser and go to `http://192.168.220.1` manually.

### The client does not appear in Locations

- Verify that you entered the correct Wi-Fi credentials
- Ensure your Wi-Fi network has internet access
- Try restarting the Raspberry Pi again
- Check that your router is not blocking new devices

### The printer is not detected

- Confirm the printer is on the same network as the Raspberry Pi
- For Bambu Lab printers, ensure LAN mode is enabled on the printer
- Check that the printer's IP address is accessible from your network

## Need Help?

If you encounter any issues:

- **Helpdesk:** Use the built-in helpdesk in the [PrinterHive application](https://app.printerhive.com)
- **Email:** [support@printerhive.com](mailto:support@printerhive.com)
- **Discord:** [Join our community](https://discord.gg/AwNP6HwvMZ)
