# Changelog

## April 10, 2024

*   **Feature Updates & Enhancements:**
    *   **AMS Categorization:** Introduced distinct categories for AMS units (e.g., Lite, 2 PRO, HT).
    *   **AMS Sensor Data:** Enabled the display of temperature and humidity for supported AMS units.
    *   **Dashboard - Location Names:** Location names are now shown alongside printers in the Dashboard for users managing multiple locations.
    *   **Dashboard - Printer Identification:** Printer manufacturer and model are now displayed in the Dashboard.
*   **Ongoing Development:**
    *   **H2D Integration:** Initial monitoring capabilities for H2D systems are now active. Full integration is currently in progress.
    *   **Klipper Printer Support:** Implementation of Klipper-based printer support is approximately 60% complete, with active development towards full feature parity.
*   **Bug Fixes:** Addressed various minor bugs and improved overall system stability.
*   **Community & Events:**
    *   **Maker Faire Prague:** Successfully presented Printerhive at Maker Faire Prague!

## March 28, 2025

*   **Infrastructure & API Updates:** Major changes deployed to our backend systems.
    *   **Domain Structure:** Updated domain structure: The application is now at `app.printerhive.com`, the website at `printerhive.com`, and documentation at `docs.printerhive.com`. (Remember to update your bookmarks and OrcaSlicer addresses if needed!)
    *   **New API:** Created a new, more powerful API. This upgrade also resolves the issue where printers sometimes displayed outdated print information.
    *   **Real-time Connections:** Adjusted the real-time connection mechanism for more reliable printer control.

## March 21, 2025

*   **Client Installation & Fixes:**
    *   **New Client Installation:** Launched a completely new, simpler client installation process! It features an in-app guide and attempts automatic printer discovery upon completion.
    *   **Location Deletion Fix:** Fixed an error that occurred when deleting locations that contained already deleted printers.
    *   **Password Reset:** Improved the forgotten password functionality.

## March 14, 2025

*   **User Interface Enhancements:** Several updates focused on improving the user experience.
    *   **Printer Reordering:** Added the ability to reorder printers on the Dashboard simply by dragging and dropping.
    *   **UI Coloring:** Fixed the coloring of all pop-up windows across both light and dark modes.
    *   **Menu Behavior:** Fixed the collapsing behavior of the main menu.
    *   **Printer Images:** Added display of static printer images when no camera stream is available for a printer.

## March 7, 2025

*   **Notifications Revamp:** Completely redesigned the notification system.
    *   Notifications can now be enabled on multiple devices and will be delivered to all enabled devices, even when the app is closed.
    *   In-app notifications are displayed while browsing.
    *   The bell icon (bottom left) is now functional, showing notifications from the last 24 hours. Opening it marks all as read.
    *   Access "Notification History" (via "View All" or profile tab) to see notifications from the last 24 hours, week, or month.
    *   Includes numerous visual improvements alongside the functional changes.

## February 23, 2025

*   **Planned Maintenance:** Scheduled maintenance and updates will occur over the next 3 days, daily between 2:50 AM and 3:10 AM (server time/timezone assumed).
    *   Expect brief service outages during this window.
    *   Ongoing prints will not be affected. No client restarts or manual intervention needed.
    *   Prints scheduled to start between 2:50 AM and 3:10 AM may be delayed until after 3:10 AM.

## February 9, 2025

*   **Scheduled Prints:** Added the ability to edit or cancel scheduled print jobs.
    *   Cancelling returns the job to the queue and turns off preheating if it was automatically started for the job.
    *   Editing allows setting/modifying the scheduled start time and preheating settings. These values are saved for future edits.
*   **Printer Control:** Added basic printer control functionality (e.g., movement, temperature - specific controls assumed intuitive). Filament loading and speed controls are planned for the next day.

## February 6, 2025

*   **Locations Feature Launch:** You can now add, edit, and delete Locations.
    *   **Purpose:** Organize printers linked to specific clients (e.g., different floors, home vs. work). Each location requires an assigned client, but a client can manage multiple locations.
    *   **Benefits:** Enables moving printers between locations (clients) easily. Future updates will include filtering printers by location.
    *   **API Keys:** Client API keys are now managed and viewed within their assigned Location settings. Each client retains its unique API key.

## February 3, 2025

*   Completed the final major backend update, introducing the underlying structure for the upcoming "Locations" feature. (Note: Location management UI is not yet available).
*   Added a **Reset** button for print jobs stuck in the "Preparing to Print" state. This allows users to return the job to the queue and free up the printer if it becomes unresponsive before starting a print.

## February 2, 2025

*   Addressed an issue causing frequent user logouts.
*   Deployed a significant backend update in preparation for upcoming features. (This was the second major infrastructure update). Users are encouraged to report any unexpected issues.

## January 24, 2025

*   **File Uploads:** Fixed a bug where uploading multiple files sometimes resulted in only a partial transfer. Multiple file uploads should now reliably transfer all files.
*   **File Manager:**
    *   Optimized the file and folder browsing experience for better usability on both desktop and mobile devices.
    *   Implemented basic column sorting. Click on column headers to sort. Sort preferences are saved per browser for each folder.

## January 23, 2025

*   Fixed an issue where some files failed to upload, potentially caused by custom filaments configured in the slicer. Users experiencing this issue should try uploading again.

## January 20, 2025

*   Launched the `printerhive.com` domain. `printerhive.eu` remains active, but users should only use one domain at a time.
*   Updated Raspberry Pi clients to provide more detailed printer status information.
*   Added a feature where an exclamation mark appears next to a printer in the list if there's an issue. Clicking the icon provides troubleshooting information. (Note: Most issues are related to the printer itself, not the service).
