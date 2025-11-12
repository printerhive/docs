# Troubleshooting

This section provides solutions to common problems you might encounter while using Printerhive. If you can't find a solution here, consider reaching out to our community or support channels.

## General Issues & Quick Links

*   **Client Installation Problems:** For issues during the Printerhive client setup on your Raspberry Pi, please see the [Troubleshooting Installation Issues](./../getting-started/client-installation.md#troubleshooting-installation-issues) section in the Client Installation guide.
*   **Initial Printer Connection Problems:** If you're having trouble connecting your printer to Printerhive for the first time, specifically with IP, Access Code, or Serial Number, refer to the detailed [Troubleshooting section in the Connecting Your Printer Manually guide](./../getting-started/connect-printer.md#troubleshooting).
*   **Camera Feed Issues (Bambu Lab X1/H2D):** Specific steps for troubleshooting camera problems can be found in the [Activating Camera guide](./../guides/activating-camera-bambu-lab-x1-h2d.md#troubleshooting).

## Diagnosing Printer Connection Issues (Printer Offline or Frequent Disconnections)

If your printer appears offline, is unresponsive in Printerhive after initial setup, or disconnects frequently, try these diagnostic steps in order:

1.  **Verify Printer's IP Address & LAN Mode (Most Common Issue):**
    *   **Check Current IP:** On your printer's display, navigate to network settings and verify its current IP address.
    *   **Has it Changed?** If you haven't set up an [IP address reservation (Static IP)](./../getting-started/connect-printer.md#importance-of-ip-address-reservation-static-ip) in your router, the printer's IP address may have changed (e.g., after a printer or router restart). This is a very common cause of connection loss.
    *   **Update in Printerhive:** If the IP address has changed, you *must* update it in Printerhive: Go to the "Printers" section, click on the printer, and edit its IP address details.
    *   **Strongly Recommended:** To prevent this from happening again, [set up an IP address reservation (Static IP)](./../getting-started/connect-printer.md#importance-of-ip-address-reservation-static-ip) for your printer in your router.
    *   **LAN Mode (Bambu Lab Printers):** Double-check that your Bambu Lab printer is still in **LAN Mode**. This can sometimes be reset, for example, after a printer firmware update. On newer firmware versions, also verify that **Developer Mode** is enabled if available.

2.  **Verify Basic Printer Status:**
    *   Ensure your printer is powered on and has completed its startup sequence.
    *   Check the printer's display for any error messages.

3.  **Check Network Fundamentals:**
    *   **Same Network:** Confirm that both the printer and the Raspberry Pi running the Printerhive client are connected to the **exact same local network** (e.g., same Wi-Fi network name and password). They must be on the same subnet.
    *   **Raspberry Pi's Network:** Ensure your Raspberry Pi has a valid IP address on the network. You can check this by logging into your RPi via SSH and running `ip addr show`.
    *   **Cables (if applicable):** If using a wired Ethernet connection for your Raspberry Pi or printer, ensure network cables are securely plugged in and not damaged.

4.  **Check Printerhive Client Status:**
    *   Ensure the Printerhive client is running on your Raspberry Pi. (See [Restarting the Printerhive Client](#restarting-the-printerhive-client) below for how to check/restart if needed).

5.  **Router/Firewall Considerations:**
    *   Check if any router settings (like parental controls, MAC filtering if not set up correctly) or firewall software on your network might be blocking communication between the Raspberry Pi and the printer, or between the Raspberry Pi and the Printerhive servers. This is less common for local network communication but can be a factor.

6.  **Restart Devices (in order):**
    *   Try restarting your 3D printer. Wait for it to fully connect to the network.
    *   Try [restarting the Printerhive client/Raspberry Pi](#restarting-the-printerhive-client).
    *   As a last resort for network issues, try restarting your router (be aware this will disconnect all devices from the internet temporarily).

If issues persist after these steps, gather any error messages or specific symptoms and reach out via our [community or support channels](./../community/index.md).

## Resetting Stuck Print Jobs

Sometimes, a print job might get stuck in the "Preparing to Print" state in the Printerhive application, and the printer doesn't start. This can happen for various reasons, including temporary communication glitches or issues on the printer itself.

Printerhive provides a **Reset** button for such jobs.

*   **When to use:** If a print job has been in the "Preparing to Print" (or a similar unresponsive pre-print) state for an unusually long time and the printer shows no signs of starting.
*   **Where to find it:** The Reset button for a stuck job is typically found within the print job's details or options in the Printerhive web application interface. (Exact location may vary slightly based on UI updates, check the job management or queue section).
*   **What it does:** Clicking the Reset button will attempt to cancel the stuck command on the printer and return the print job to the queue. This should free up the printer to accept new jobs.

If a job repeatedly gets stuck, investigate potential underlying issues with the printer, G-code file, or network stability (refer to connection troubleshooting above).

## Restarting the Printerhive Client

If the Printerhive client on your Raspberry Pi seems unresponsive or you're experiencing persistent communication issues that aren't resolved by other troubleshooting steps, restarting the client can help.

There are two main ways to do this:

1.  **Restart the Raspberry Pi (Recommended for most users):**
    *   The simplest and often most effective method is to fully restart the Raspberry Pi.
    *   **How:** Safely shut down the Raspberry Pi if possible (e.g., via SSH with `sudo shutdown now`). Then, disconnect the power supply, wait for about 10-15 seconds, and plug it back in.
    *   If you cannot SSH, you can directly disconnect the power, wait, and reconnect, but a proper shutdown is gentler on the system.

2.  **Restart the Docker Container (Advanced):**
    *   The Printerhive client runs as a Docker container on the Raspberry Pi. If you are comfortable with the command line, you can try restarting just the container.
    *   **How to find the container name/ID:**
        *   SSH into your Raspberry Pi.
        *   Run `sudo docker ps`. This will list all running containers. Look for a container related to Printerhive (the name might include "printerhive" or "phclient"). Note its Container ID or Name.
    *   **How to restart the container:**
        *   Run `sudo docker restart <Container_ID_or_Name>` (e.g., `sudo docker restart printerhive_client`).
    *   This method is faster than a full RPi reboot but might not resolve issues rooted deeper in the OS or network stack of the RPi.

After restarting, allow a few minutes for the client to initialize and reconnect to your printers and the Printerhive service. 