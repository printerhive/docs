---
description: "Use Printerhive locations to organize printers, clients, and multi-site setups."
---

# Locations

Locations allow you to connect 3D printers from different physical places or distribute a large number of printers across multiple client devices for performance reasons.

Locations can also manage user access rights. Users can be assigned to specific locations, such as within a home, school, or workshop, limiting their access accordingly.

Printers within different locations can be on the same network or separate networks, enabling remote management of all your printers, regardless of their physical distance.

## Default Location

A default location is automatically created when you set up your Printerhive account.

## Adding a New Location

To add a new location:

1.  Navigate to the **Locations** section in your Printerhive dashboard.
2.  Click the **Add Location** button.
3.  Enter a name for your new location. You can rename it later if needed.

## Assigning Clients to Locations

When creating a new location, you have two options:

*   **Add a new client:** Use this when the new location should be managed by a separate Windows, macOS, Raspberry Pi, or Linux client. During the [client installation process](./../getting-started/client-installation.md), sign in securely and select this location.
*   **Assign to existing clients:** Use this option if you want to segment printers connected to a single existing client. For example, you might separate printers in a workshop from those in an office within the same building, all managed by one client device.

## Activating a New Client

After creating a location with a new client, you need to activate it:

1.  Install the Printerhive client on Windows, macOS, Raspberry Pi, or Linux.
2.  Sign in with your Printerhive account in the client setup.
3.  Select the location the client should manage.
4.  Once the client is online, the location is ready to use.

## Deleting a Location

Before deleting a location, you must ensure it has no printers assigned to it. If there are printers in the location you wish to delete, you need to move them to another existing location first.

Once the location is empty, you can proceed to delete it.

Please note:

*   Printerhive requires at least one location to remain active in your account.
*   You cannot delete the very last location, which is typically the default location created during registration. 