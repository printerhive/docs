# Printerhive Installation and Setup Guide

After creating an account and logging into the Printerhive application, the user enters the Installation Guide. This guide will walk you through the necessary steps.

## Step 1: Getting Started with Printerhive

Printerhive is a cloud platform designed for the remote management and automation of your 3D printers. It provides:

*   An overview of all your printers in one centralized location.
*   Remote control over your printing tasks from anywhere.
*   Automation capabilities for routine tasks.
*   Optimization of printer utilization.

**Prerequisites:**

Before you begin, ensure you have the following:

*   A functional Raspberry Pi with a compatible operating system installed. See [Hardware Requirements](./hardware-requirements.md) and [Prepare Raspberry Pi](./prepare-raspberry-pi.md).
*   A stable internet connection for the Raspberry Pi.
*   A 3D printer compatible with Printerhive (currently supports Bambu Lab 3D printers and printers with Klipper firmware).

> **Note for Advanced Users:** While this guide focuses on Raspberry Pi installation, the Printerhive client runs in Docker and can be installed on various other devices such as Synology NAS, virtual machines, Mac computers, servers, and other systems that support Docker.

## Step 2: Client Installation

Once you are logged into your Raspberry Pi (e.g., via SSH), you need to install the Printerhive client software.

1.  **Copy the Installation Command:** Obtain the installation command provided within the Printerhive web application's setup guide.
2.  **Execute the Command:** Paste the command into your Raspberry Pi's terminal/command line.
3.  **Confirm:** Press `Enter` to run the script.
4.  **Enter Password:** During the installation, you might be prompted to enter the password for your Raspberry Pi user.
5.  **Wait for Completion:** The installation process is quick and typically completes within 1 minute. Even on slower devices, it should take no more than a few minutes.
6.  **Monitor Progress:** You can monitor the installation progress directly in the Printerhive web interface during the setup guide steps.

**What the installer does:**

The installation script automates several setup tasks, including:
*   Installing Docker and Docker Compose.
*   Downloading the Printerhive client binary.
*   Creating the necessary application environment.
*   Configuring settings related to printer communication.
*   Starting the Printerhive client service.
*   Automatically scanning the network for Bambu Lab printers and adding them to your account (if not already present).
*   Synchronizing with the cloud if you already have printers in your account.

*Note: For detailed instructions on SSH access and initial Raspberry Pi setup, refer to the [Prepare Raspberry Pi](./prepare-raspberry-pi.md) guide.*

## Step 3: Adding a Printer

There are two primary ways to add your 3D printer(s) to Printerhive:

### Automatic Discovery

*   The Printerhive client automatically scans your local network for compatible printers (e.g., Bambu Lab printers in LAN mode).
*   If your printer(s) are discovered, they will appear in the setup guide or the **Printers** section.
*   You will typically only need to:
    1.  Enter the correct **Access Code** for each printer (found on the printer's screen).
    2.  Optionally, adjust the **Name** of the printer for easier identification within Printerhive.

### Manual Addition

If your printer is not automatically discovered, you can add it manually:

1.  Navigate to the **Printers** section in the main menu of the Printerhive web application.
2.  Click the **"Add Printer"** button, usually located in the top-right corner.
3.  A form will appear. Fill in the required details:
    *   **Printer Type:** Select the appropriate type (e.g., BambuLab).
    *   **Printer Name:** Choose a descriptive name (e.g., "Workshop P1S").
    *   **Printer IP Address:** Enter the IP address displayed on your printer's network settings screen.
    *   **Printer Access Code:** Enter the access code shown on your printer's screen.
    *   **Printer Serial Number:** Enter the printer's unique serial number (SN).
    *   **Location:** Select the location where the Printerhive client managing this printer is running (you might only have "Default").
4.  Click **"Save"**.

*For detailed steps on finding the required information (IP Address, Access Code, Serial Number) on your printer, refer to the [Connecting Your Printer Manually](./connect-printer.md) guide.*

**Reasons for Failed Automatic Discovery:**

*   **Network Issues:** The printer is not connected to the network, or it's on a different network subnet than the Raspberry Pi running the Printerhive client.
*   **Firewall/Router:** Network security settings (like a firewall or router configuration) might be blocking the mDNS/Bonjour discovery protocols used to find devices.
*   **Printer Mode:** Ensure your printer (e.g., Bambu Lab) is set to **LAN Mode**.

## Step 4: Completing Setup

Once you have successfully added at least one printer (either automatically or manually), the initial setup is complete! Your printers are now connected to Printerhive and ready for management.

You can now explore the Printerhive application to:

*   **Manage Printers:** View status, details, and manage your connected printers in the **Printers** section.
*   **Monitor Print Jobs:** Keep track of ongoing and past print jobs.
*   **Configure Automations:** Set up rules and workflows to automate tasks.
*   **Remote Control:** Start, stop, and monitor prints remotely.

If you skipped adding printers during the initial guide, you can always go back to the **Printers** section and add them using the **"Add Printer"** button as described in Step 3. 