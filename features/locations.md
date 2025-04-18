# Locations

Locations allow you to connect 3D printers from different physical places or distribute a large number of printers across multiple Raspberry Pis for performance reasons.

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

*   **Add a new client:** This requires a separate Raspberry Pi for the new location. A unique API Key will be generated for this client, which you'll need during the [client installation process](/getting-started/installation).
*   **Assign to existing clients:** Use this option if you want to segment printers connected to a single Raspberry Pi. For example, you might separate printers in a workshop from those in an office within the same building, all managed by one Raspberry Pi.

## Activating a New Client

After creating a location with a new client, you need to activate it:

1.  During the client activation wizard, you'll be asked if you are installing on your own device (your Raspberry Pi). Confirm this to view the API Key generated for the new client location.
2.  Alternatively, if you have a pre-installed device supplied by Printerhive, select the option for pre-installed devices. You will be prompted to enter the API Key that came with your purchased client.
3.  Use the appropriate API Key (either the newly generated one for your own Pi or the one from the pre-installed device) during the client software installation or activation step.
4.  Click **Activate** in the Printerhive dashboard to complete the process. The client will be ready to use.

## Deleting a Location

Before deleting a location, you must ensure it has no printers assigned to it. If there are printers in the location you wish to delete, you need to move them to another existing location first.

Once the location is empty, you can proceed to delete it.

Please note:

*   Printerhive requires at least one location to remain active in your account.
*   You cannot delete the very last location, which is typically the default location created during registration. 