# Connecting Your Printer Manually

This guide explains how to add your Bambu Lab printer to your Printerhive account.

**Prerequisite:** Ensure your Bambu Lab printer is turned on, connected to the same Wi-Fi network as your Printerhive client device (e.g., Raspberry Pi), and set to **LAN Mode**.

**Highly Recommended:** For a stable connection, we strongly advise [setting up a static IP address (IP reservation)](#importance-of-ip-address-reservation-static-ip) for your printer in your router settings *before* adding it to Printerhive or as soon as possible thereafter. This prevents connection issues if your printer's IP address changes.

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

## Importance of IP Address Reservation (Static IP)

To ensure a stable and reliable connection for your printers to Printerhive, we **strongly recommend setting up IP address reservations** for each of your printers in your router.

When a printer (or any other device) connects to your network, the router typically assigns it an IP address dynamically (via DHCP). This dynamic IP address can change from time to time, for example, after restarting the printer, router, or when the IP address "lease" expires.

If the printer's IP address changes, the Printerhive client may not be able to automatically find it at the new address, which will cause the printer to appear offline in the application.

**IP address reservation (sometimes referred to as "static DHCP" or "DHCP reservation")** instructs your router to always assign the same IP address to a specific printer (identified by its MAC address). This ensures that the printer's IP address remains constant.

**How to set up IP address reservation:**

1.  Find your printer's MAC address. You can usually find it in the printer's network settings or on a label on the device.
2.  Log in to your router's administration interface.
3.  Find the DHCP settings section, often called "DHCP Reservation," "Static Leases," or similar.
4.  Add a new reservation, pairing the printer's MAC address with a desired (and available) IP address from your local range.
5.  Save the settings and, if necessary, restart your router and printer.

The procedure may vary depending on your router model. Please consult your router's manual for specific instructions.

## Troubleshooting

**Cannot Connect / Printer Offline:** This is often caused by incorrect connection details or setup. Please check the following points:

*   **Printer IP Address Changed?** This is a very common issue. If you haven't set up an IP address reservation for your printer in your router (see [Importance of IP Address Reservation](#importance-of-ip-address-reservation-static-ip) above), its IP address might have changed (e.g., after a router or printer restart).
    *   Verify the current IP address on the printer's display.
    *   If it differs from the one entered in Printerhive, you must update it:
        1.  Go to the "Printers" section in Printerhive.
        2.  Click on the printer you want to edit.
        3.  In the printer details, correct the IP address and save the changes.
    *   **Solution:** Set up an IP address reservation in your router to prevent this from happening again.

#### IP Address Check
Ensure the IP Address exactly matches the one shown on your printer's network settings screen.
*   **Has the printer's IP address changed?** If you haven't set up an IP address reservation (see above), your printer's IP address might have changed. Verify the current IP address on the printer's display. If it differs from the one entered in Printerhive, you must update it in Printerhive:
    1.  Go to the "Printers" section.
    2.  Click on the printer you want to edit.
    3.  In the printer details, correct the IP address and save the changes.

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
