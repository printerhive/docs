# Activating Camera for Bambu Lab X1 & H2D in Printerhive

To view the live camera feed from your Bambu Lab X1 or H2D series printers within Printerhive, a specific setting needs to be enabled on the printer itself. This guide will walk you through the necessary steps, focusing on the crucial "LAN Only Liveview" option.

## Prerequisites

Before proceeding, please ensure the following on your Bambu Lab X1 or H2D printer:

*   **Connected to your Local Network (LAN):** The printer must be connected to the same local network as your Printerhive client.
*   **LAN Mode Active:** This mode allows direct communication with the printer over your local network. Many users already have this enabled for local control or other third-party services.
*   **Developer Mode Active:** Developer Mode unlocks additional functionalities, including the live view option we need. Similar to LAN Mode, this might already be active on your printer.

While LAN Mode and Developer Mode are often pre-activated by users for other functionalities, the camera feed in Printerhive specifically requires the next step.

## Key Step: Enable "LAN Only Liveview"

The most critical step for enabling the camera feed in Printerhive is to activate the **"LAN Only Liveview"** option on your printer. Without this, even if LAN Mode and Developer Mode are on, the camera stream will not be accessible to Printerhive.

1.  Navigate to the network settings or Developer Mode options on your printer's interface.
2.  Locate the **"LAN Only Liveview"** toggle or checkbox.
3.  Ensure this option is **enabled** or checked.

This setting ensures that the live video stream is broadcasted over your local network, allowing Printerhive to access and display it.

## Verifying Functionality

Once "LAN Only Liveview" is enabled:

1.  Open Printerhive.
2.  Navigate to the dashboard or the specific printer view for your Bambu Lab X1 or H2D.
3.  The camera feed should now be visible.

## Troubleshooting

If the camera feed still doesn't appear in Printerhive:

*   **Restart Printer:** A simple restart of the printer can sometimes resolve connectivity issues.
*   **Verify Network:** Double-check that the printer is still connected to your LAN and has a valid IP address.
*   **Check Printerhive Client:** Ensure your Printerhive client is running and connected to the network.
*   **Re-toggle Settings:** Try disabling and then re-enabling LAN Mode, Developer Mode, and particularly "LAN Only Liveview" on the printer.
*   **Consult Printerhive Support:** If problems persist, please reach out to Printerhive support for further assistance. 