# Connecting Your First Printer

This guide explains how to add your Bambu Lab printer to your Printerhive account.

**Prerequisite:** Ensure your Bambu Lab printer is turned on, connected to the same Wi-Fi network as your Printerhive client device (e.g., Raspberry Pi), and set to **LAN Mode**.

## Finding Printer Information

Before adding the printer in Printerhive, you need to gather three pieces of information from your printer's screen:

1.  **IP Address:** This is the local network address of your printer.
2.  **Access Code:** A security code needed for LAN communication.
3.  **Serial Number (SN):** The unique identifier for your printer.

**How to find these on your Bambu Lab printer:**

*   Navigate through the printer's touchscreen menu:
    *   Go to **Settings** (often represented by a gear icon).
    *   Select **Network** or **WLAN**.
*   Here you should find:
    *   Your printer's current **IP Address**.
    *   The **Access Code** (sometimes called LAN Access Code or Passcode).
*   The **Serial Number (SN)** is typically found:
    *   In the **Settings** -> **Device Info** or **About Printer** menu on the touchscreen.
    *   Physically printed on a sticker on the back or bottom of the printer.

_(Note: Menu navigation might slightly differ depending on your printer model and firmware version. Refer to your Bambu Lab manual if needed.)_

**Bambu Lab Wiki Resources:**

For detailed information specific to your printer model, including menu navigation and finding specific details, refer to the official Bambu Lab Wiki:

*   **A1 Series:** [Bambu Lab A1 Wiki](https://wiki.bambulab.com/en/a1)
*   **A1 Mini Series:** [Bambu Lab A1 Mini Wiki](https://wiki.bambulab.com/en/a1-mini)
*   **P1 Series (P1P / P1S):** [Bambu Lab P1P Wiki](https://wiki.bambulab.com/en/p1/p1p) / [Bambu Lab P1S Wiki](https://wiki.bambulab.com/en/p1/p1s)
*   **X1 Series (X1 / X1-Carbon):** [Bambu Lab X1 Wiki](https://wiki.bambulab.com/en/x1)

## Adding the Printer in Printerhive

1.  Log in to your Printerhive account: [https://app.printerhive.com](https://app.printerhive.com)
2.  Navigate to the **Printers** section.
3.  Click the **"Add New Printer"** button.
4.  A pop-up window will appear. Fill in the following details:
    *   **Type:** Select **BambuLab** (should be selected by default if it's the only option).
    *   **Name:** Give your printer a recognizable name (e.g., "Office P1S", "Workshop X1C"). This name is only for your reference within the Printerhive interface to easily identify the printer; it doesn't affect printer operation or other settings.
    *   **Printer IP address:** Enter the IP address you found on the printer screen.
    *   **Printer access code:** Enter the Access Code you found on the printer screen.
    *   **Printer serial number:** Enter the Serial Number (SN) you found.
    *   **Location:** Choose the location where this printer is situated (you might only have "Default" if you haven't created others).
5.  Click **"Save"**.

Printerhive will now attempt to connect to your printer using the provided details. If successful, your printer should appear in the Printers list shortly.

## Troubleshooting

**Cannot Connect / Printer Offline:** This is often caused by incorrect connection details or setup. Please check the following points:

#### IP Address Check
Ensure the IP Address exactly matches the one shown on your printer's network settings screen.

#### Access Code Check
This code is **case-sensitive**. Verify you have entered it *exactly* as it appears on the printer screen, including uppercase and lowercase letters.

#### Serial Number (SN) Check
While usually not the cause of *connection* issues, ensure the **Serial Number (SN)** is entered correctly for proper printer identification. Double-check it against the printer's screen (Settings -> Device Info) or the sticker on the device.

#### LAN Mode Check
Confirm your printer is still set to **LAN Mode** in its network settings.

#### Network Check
Both the printer and the Printerhive client device (e.g., Raspberry Pi) *must* be on the exact same Wi-Fi/LAN network.

#### Client Device Restart
Try restarting the device where the Printerhive client is installed (e.g., your Raspberry Pi). Simply disconnect the power supply, wait a few seconds, and plug it back in. Sometimes a simple restart can resolve temporary connection glitches.
