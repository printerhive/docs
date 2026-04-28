---
description: "Printerhive public changelog with product updates, new features, fixes, and workflow improvements."
---

# Changelog

## April 28, 2026

*   **Stream and print monitoring:**
    *   **Stream printer assignment:** Added support for assigning printers to streams, making stream-based monitoring and control easier to organize.
    *   **Stream controls:** Improved stream player controls and statistics for internal monitoring and debugging.

*   **Order and product workflow:**
    *   **Product variants:** Added product variant handling for order items, so imported or manually prepared items can represent different versions more accurately.
    *   **Upgates public docs:** Added public Upgates connection and feature pages to help shops understand what the integration can do.

*   **Print start reliability:**
    *   **Start throttling:** Added throttling for print-start commands per user, reducing accidental duplicate starts and making queue processing safer.
    *   **Printer eligibility:** Improved printer eligibility checks so jobs are matched to compatible printers more reliably.
    *   **Filament mismatch warnings:** Added clearer warnings for filament mismatches, with user settings to control confirmation before printing.

## April 22, 2026

*   **Account & device security:**
    *   **Active sessions:** You can now see active sign-in sessions in settings, including location, IP address, and last activity.
    *   **Device names:** Devices can be named, making it easier to recognize where you are signed in.
    *   **Remote sign-out:** Sessions you no longer use can be signed out directly from settings.
    *   **New device emails:** Optional email notifications can alert you when a new device signs in.

*   **Default print options:**
    *   **Global defaults:** Save default print options for all printers.
    *   **Printer-specific defaults:** Keep separate defaults for individual printers, so switching printers restores the right setup for that machine.

*   **File and queue fixes:**
    *   **More reliable uploads:** The upload button now opens the file picker and upload window more consistently.
    *   **Print job editing:** Switching printers while editing a print job now keeps the configuration in sync.
    *   **Bulk actions:** “Select all” in the queue now respects the active printer type filter, so bulk moves and deletions only affect visible items.

*   **Bambu Lab improvements:**
    *   **Smoother print starts:** Improved handling of bed leveling, preheating, and prints started from history.
    *   **X2D support:** Printerhive now recognizes Bambu Lab X2D and prepares the right controls, nozzle details, and dual-nozzle options.

## April 15, 2026

*   **Custom print queues:**
    *   **Named queues:** Create your own queues, switch between them, and move selected jobs into the right queue.
    *   **Order and batch organization:** When sending a whole project or product to print, it is easier to separate work by order, batch, or priority.

*   **Less manual cleanup:**
    *   **Auto-delete finished order queues:** Queues created from orders can now be removed automatically once the last print finishes.

*   **Upgates integration:**
    *   **Product import:** Connected Upgates stores can import products directly into Printerhive, including an import summary.

*   **Smarter printer selection:**
    *   **Better matching:** Printerhive now gives more weight to nozzle size, filament, and color matches when choosing a printer for queued jobs.

*   **Reliability and mobile layout:**
    *   **Bambu Lab progress:** Improved how incomplete printer progress updates are handled.
    *   **iPhone layout:** Adjusted mobile layout so content does not slip under the top system bar.

## April 8, 2026

*   **Safari and iPhone fixes:**
    *   **Startup crashes fixed:** Printerhive now avoids browser APIs that Safari does not support, fixing startup issues on iPhone and Mac.

*   **E-commerce work:**
    *   **WooCommerce and Phillibert:** Improved order integration workflows, including simple webhooks for incoming orders.
    *   **Upcoming integrations:** Continued work on Shopify and Upgates support.

*   **Performance work:**
    *   Ongoing performance improvements to make the app more stable and reliable.

## April 1, 2026

*   **Files directly in projects and products:**
    *   **File picker:** Add files to project/product items directly from your file library.
    *   **Folder navigation:** Browse folders, search files, filter by tags, and select specific plates from a file.
    *   **Fast item creation:** Assign selected files to an existing item or create a new item immediately.

*   **AMS and filament improvements:**
    *   **AMS QR labels:** Fixed scanning for AMS slot QR labels and filament tray labels.
    *   **Low filament warnings:** Printer cards now show a warning when the selected spool does not have enough filament for the print, including exact remaining and required amounts.

*   **Bambu Lab H2S:**
    *   Fixed calibration options for bed leveling, vibration, and nozzle calibration.

*   **UI improvements:**
    *   Improved filament selector behavior while scrolling.
    *   Improved printer detail sidebar behavior on smaller screens.
    *   Fixed several dark mode issues.

## March 25, 2026

*   **WooCommerce integration:**
    *   Connect a WooCommerce store in account settings and let Printerhive process incoming orders automatically.

*   **Bambu Lab filament calibration:**
    *   **K-factor:** Set a K-factor when assigning filament to an AMS tray or virtual slot. The value is saved to the spool and pre-filled next time.

*   **File manager performance:**
    *   **Cached plate previews:** Plate images are cached on the server, making large file libraries faster to browse.

*   **Filament storage fixes:**
    *   The “Clear filters” button now reliably resets all filters at once.
    *   Fixed an issue where a missing filament color in an AMS tray could prevent a print job from starting.

*   **Bambu Lab error messages:**
    *   HMS error codes now have clearer and more accurate translations.

## March 11, 2026

*   **QR labels:**
    *   **Printer slot labels:** Label templates now support AMS and external feeder slots, including printer name and slot number.
    *   **Faster scanning:** The QR scanner starts directly without an extra camera prompt on mobile devices.

*   **Filament storage:**
    *   Fixed the “Labels not printed” filter so it only shows spools without printed labels.
    *   Redesigned filters with a cleaner layout.
    *   Low-stock alerts now appear above filters for better visibility.

*   **Email preferences:**
    *   Broadcast emails now include unsubscribe links, including one-click unsubscribe support in modern email clients.

*   **File detail fix:**
    *   Fixed a crash on the file detail page when a filament had no material type set.

## March 5, 2026

*   **QR labels:**
    *   Spool QR codes now use a stable printer/AMS/tray position format instead of an internal identifier, so labels keep working after moving spools or swapping AMS units.

*   **Automatic mapping:**
    *   Custom spools are now recognized correctly when matching AMS trays to print jobs.

*   **Mobile layout:**
    *   Printer cards on the print page display better on smaller screens.
    *   Filament mapping is clearer and spool names are less repetitive.

*   **Print queue stability:**
    *   Invalid queued jobs are skipped automatically so the rest of the queue can continue.

*   **Ticket privacy:**
    *   Internal ticket notes are now visible only to administrators.

## February 19, 2026

*   **Transfer progress:**
    *   Upload and download progress now shows the file name and target printer directly in a compact floating panel.
    *   Multiple simultaneous transfers are easier to tell apart.

*   **Bambu Lab print jobs:**
    *   Fixed cases where one Bambu Lab print could appear as multiple active jobs.

*   **PrusaSlicer files:**
    *   Improved recognition of GCode files exported from PrusaSlicer with generic Prusa profiles.

## February 12, 2026

*   **Registration protection:**
    *   Added CAPTCHA, IP-based rate limiting, and bot-detection checks to reduce automated registrations.

*   **Printer communication:**
    *   Improved WebSocket handling and scheduler reliability.

*   **Print workflow fixes:**
    *   Continued fixes around queue handling and status updates.

## January 2026

*   **Filament and spool workflow:**
    *   Added QR label editing for spools.
    *   Improved filament deduction for virtual trays and single-nozzle printers.
    *   Added support for reloading AMS filament deduction after changes.

*   **Print preparation:**
    *   Added skip-object support before printing.
    *   Improved estimated time display in the queue.
    *   Improved handling of long file names and checksum checks.

*   **Account emails:**
    *   Added improved registration and password reset emails.

*   **Bambu Lab errors:**
    *   Added more HMS error translations and troubleshooting messages.

*   **Storage reliability:**
    *   Continued work on S3 storage and local backup handling.

## December 2025

*   **Filament storage:**
    *   Introduced early filament storage workflows for testers and continued improving filtering and selection.
    *   Redesigned the filament selector for easier mapping before print.

*   **AMS and printer controls:**
    *   Added AMS control improvements and more nozzle options.
    *   Added H2C printer support.

*   **File management:**
    *   Improved folder renaming and ordering.
    *   Added expanded plate details in file views.

*   **Login and campaigns:**
    *   Added Apple sign-in work and email campaign support.

*   **Order data:**
    *   Added EAN and invoice-related information to order items and product/order workflows.

## November 2025

*   **Pricing and production planning:**
    *   Added a price calculator and related usage statistics.
    *   Added a Bill of Materials workflow for products and plates.

*   **User and public profiles:**
    *   Added user profile improvements and public profile/banner support.

*   **Files and print history:**
    *   Added previews to print history in file detail views.
    *   Saved column visibility and sorting preferences in file views.
    *   Fixed file upload and duplicate print job issues.

*   **Prusa and Klipper support:**
    *   Improved Prusa uploads, local PrusaLink support for older devices, and model detection.

*   **Shop and order integrations:**
    *   Added Phillibert extension logic and improved access rights around shop orders.

## October 2025

*   **Ticketing:**
    *   Added and expanded the support ticket system, including internal notes and attachments.

*   **Print and file management:**
    *   Added file and directory renaming improvements.
    *   Added printer and print history statistics.
    *   Improved reprint, skip-object, and deleted-printer/deleted-file handling.

*   **Printer support:**
    *   Added support and controls for newer Bambu Lab models including P2S.
    *   Added chamber temperature and chamber control improvements.
    *   Improved AMS handling and calibration support.

*   **Streaming and API work:**
    *   Added early streaming features.
    *   Expanded API work for integrations and advanced plans.

*   **Interface improvements:**
    *   Added configurable printer card display and quick actions.
    *   Improved admin ticket views and basic diagnostics.

## September 2025

*   **Projects, products, and order items:**
    *   Added the first project/product workflows and order item printing flows.
    *   Added direct print and “add all to queue” actions from order items.
    *   Improved project tabs and order item details.

*   **YOLO / automatic queue mode:**
    *   Added early automatic queue logic for choosing suitable printers and plates.
    *   Improved filament and AMS matching for automatic printing.

*   **Shopify integration:**
    *   Added the Shopify app, shop connection flow, and order processing work.
    *   Improved Shopify webhooks and fallback order handling.

*   **Prusa support:**
    *   Added Prusa printer support, status handling, RTSP work, and file compatibility improvements.

*   **Storage and performance:**
    *   Added S3-based file storage work and Redis caching improvements.

*   **Camera support:**
    *   Added camera-related functionality for printer monitoring.

## August 2025

*   **Klipper improvements:**
    *   Improved Klipper file handling, offline handling, restart controls, firmware restart, Z-offset, shutdown, and startup actions.

*   **Swap Mod and plate selection:**
    *   Added automatic build plate selection and improved Swap Mod handling for A1 and A1 mini workflows.

*   **Jobox support:**
    *   Added initial Jobox-related support.

*   **Printer communication:**
    *   Improved client connection handling so older clients are kicked when a new one connects.
    *   Improved upload status tracking between Printerhive, client, and printer.

## August 6, 2025

*   **Core Improvements:**
    *   **Missing Translations:** Added missing translations throughout the application.
    *   **OrcaSlicer File Sending:** Improved file upload functionality from OrcaSlicer.
    *   **Column Visibility:** Fixed column hiding functionality in print overview tables.
    *   **Printer Commands:** Enhanced command sending to printers with significantly faster response times.

*   **UI/UX Changes:**
    *   **Print Time Display:** Minor design improvements for better print time visualization.
    *   **File Detail Zoom:** Added zoom functionality for print plates in file detail view.
    *   **Remote Client Restart:** Added a button for remote client restart in location settings.
    *   **Queue Button Consolidation:** Unified the confusing "Configure" and "Print" buttons in the queue into a single "Print" button for better user experience.

*   **Bug Fixes:**
    *   Various minor fixes and improvements based on user feedback.

## August 1, 2025

*   **🚀 Major Client Update:**
    *   **Completely New Client:** We have released a completely redesigned, faster, and more reliable client for 2025.
    *   **Manual Update Required:** Due to security reasons (we cannot access your device), this update cannot be performed automatically.
    *   **Legacy Client Support:** The old client will continue to function but will no longer be actively supported after August 15, 2025.

## July 16, 2025

*   **Feature Updates & Enhancements:**
    *   **Universal Nozzle Support:** Full support for all nozzle types, including those not yet available in OrcaSlicer.
    *   **Smart Print Queue Logic:** Implemented intelligent print start logic that automatically selects the best available printer – a step toward a fully automated queue system.
    *   **Multi-Hotend Support:** New hotend management logic to support printers with multiple hotends and toolchanger systems.
    *   **AMS Drying Completion Time:** The AMS dialog now displays filament drying completion time for PRO and HT models.

*   **Unique Features:**
    *   **AMS Drying Completion Notifications:** Introduced unique notifications for AMS filament drying completion – a feature exclusive to Printerhive.

*   **UI/UX Changes:**
    *   **Enhanced Date Display:** Improved date display logic that hides the year for current items to reduce visual clutter and improve readability.

## July 2, 2025

*   **Feature Updates & Enhancements:**
    *   **Real-time Printer Status:** The printer overview and printer detail pages now display up to 49 different real-time statuses for ongoing actions, such as "Bed Heating," "Bed Leveling," and more.
    *   **New Nozzle Support:** Added support for new nozzles included in the latest Bambu Lab printer firmware.
    *   **API Expansion:** Our API has been expanded with additional endpoints to support new features and integrations.

*   **UI/UX Changes:**
    *   **New AMS Interface:** A redesigned user interface for the AMS has been implemented in the printer detail view for improved clarity and management.
    *   **Printer Model in Queue:** The print queue now includes a column indicating the specific printer model for which each file was sliced.
    *   **Print Job Details:** The "Start Print" dialog now displays key information about the print job, including file name, plate name, material weight, estimated duration, and completion time.
    *   **Reprint from History:** You can now restart a print or add it back to the queue directly from the print history.

*   **Client & Backend Improvements:**
    *   **Client Job Processing Logic:** The Printerhive client (for Raspberry Pi and similar devices) now only processes jobs that are less than 15 seconds old. This prevents unintended printer actions during internet outages or other communication failures.

*   **Ongoing Development:**
    *   **Bambu Lab H2D Integration:** We are finalizing the full integration of the dual-toolhead Bambu Lab H2D printer.

*   **Bug Fixes:**
    *   This update also includes numerous bug fixes and performance improvements.

## June 24, 2025

*   **API for Higher-Tier Plans (In-Progress):**
    *   We have started development on a new API for our **Professional** and **Business** plans.
    *   The Professional plan will include read-only API access, while the Business plan will feature full read/write capabilities, allowing for powerful integrations like automatically queuing print jobs from an e-commerce store upon order creation.
*   **Internal Logic & Communication Refactor:**
    *   A complete overhaul of the application's internal logic and the communication with the Raspberry Pi client has been completed. This change unifies the communication protocol for printers from different manufacturers, improving stability and scalability.
*   **Feature Updates & Enhancements:**
    *   **Google Sign-In/Registration:** You can now sign up and log in to Printerhive using your Google account.
*   **Bug Fixes:**
    *   This update also includes numerous bug fixes and performance improvements.

## June 11, 2025

*   **UI/UX & Quality of Life Updates:**
    *   **Dashboard Sounds:** Introduced audible notifications on the dashboard for key events. Sounds can be enabled or disabled in user settings.
    *   **Bulk File Management:** Users can now select and move multiple files at once in both the Queue and Files sections. Bulk selection is supported via Shift-click, allowing for more efficient file management.
    *   **Macro Loading:** The system now only loads non-hidden macros, simplifying the user interface and reducing clutter.
    *   **Profile Pictures:** Added the ability for users to upload and change their profile picture in user settings.
    *   **Folder Management:** Resolved an issue with folder deletion and added the ability to set a main folder as the default for quicker access.
    *   **Notification Bubbles:** All notification bubbles across the application now automatically hide after a short duration to provide a cleaner user experience.
    *   **Print from History:** Added the functionality to start a new print job directly from the print history list in the printer detail view.

## June 2, 2025

*   **Major Feature Launch: Klipper Support**
    *   **Klipper Integration:** Printerhive now officially supports Klipper-based printers alongside Bambu Lab printers, creating a unified interface to manage multi-vendor printer fleets.
    *   **Remote Access without VPN:** Users can securely access and control their Klipper printers from anywhere in the world without needing to configure a VPN or open ports.
    *   **Seamless Integration:** The integration is designed to be seamless. Users can continue to use their existing Klipper interface (e.g., Mainsail/Fluidd) as usual. Printerhive mirrors all data, ensuring no loss of functionality or history.
    *   **Free Testing Period:** To celebrate the launch, all accounts (including Free tier) can connect and manage an unlimited number of Klipper printers until July 9, 2025. After this date, standard account limits will apply to the total number of printers (both Klipper and Bambu Lab).
    *   **Initial Klipper Features & Known Limitations:**
        *   **Current Functionality:** Users can upload individual gcode files to Printerhive and initiate prints on their Klipper machines.
        *   **Ongoing Development:** Full feature parity is in active development. Features being finalized in the coming days/weeks include:
            *   Direct print submission from OrcaSlicer via Printerhive.
            *   Multi-plate 3mf file support.
            *   Advanced printer controls (nozzle, fans, flow, motors, Z-tilt).
            *   Support for multi-material systems.

## May 16, 2025

*   **Feature Updates & Enhancements:**
    *   **New "Reserved" Printer Status:** Introduced support for a non-standard "Reserved" printer status. This status is displayed on a printer after a print job is sent to it and remains active until the printer physically starts printing. This enhancement helps users easily identify which printers are already allocated for upcoming jobs, simplifying queue management for sequential prints.
    *   **Persistent Column Visibility in Print Jobs:** Column visibility settings (show/hide) in all three Print Jobs sections (Queue, Current, History) are now saved per user. These preferences are preserved across devices and sessions and will no longer reset to their default state. (Note: Separate settings for PC/Tablet/Mobile can be considered for future implementation based on user requirements.)
    *   **Plate Identification in File Detail View:** Plate names or numbers are now displayed above their respective images in the print file detail view. If a plate name is too long to fit, the full name will be shown on hover.

*   **UI/UX Changes:**
    *   **Print Job Submission Redirect Update:** The redirect behavior after sending a file to print has been temporarily changed. Users are now redirected to the print **Queue** section instead of the "Current Prints" section.
    *   **Print Configuration Button Renamed:** The "Save" button within the print configuration dialog has been renamed to "Save to Queue" to better reflect its action.

*   **API & Backend Improvements:**
    *   **Print Job Status Accuracy:** Improved API logic to address an issue where print jobs sometimes remained in the "Current Prints" section even after they had actually finished. Completed jobs should now be correctly and promptly moved to history.

## Guides

*   **NEW:** [How to Perform a Factory Reset on Your Bambu Lab Printer After a Firmware Update](/guides/bambu-lab-factory-reset.md) - A guide to help resolve communication issues after a Bambu Lab firmware update.
*   **NEW:** [Activating Camera for Bambu Lab X1 & H2D in Printerhive](/guides/activating-camera-bambu-lab-x1-h2d.md) - Guide to enable camera live view for X1 & H2D series printers in Printerhive by activating "LAN Only Liveview".

## April 10, 2025

*   **Feature Updates & Enhancements:**
    *   **AMS Categorization:** Introduced distinct categories for AMS units (e.g., AMS, AMS Lite,AMS 2 PRO, AMS HT).
    *   **AMS Sensor Data:** Enabled the display of temperature and humidity for supported AMS units.
    *   **Dashboard - Location Names:** Location names are now shown alongside printers in the Dashboard for users managing multiple locations.
    *   **Dashboard - Printer Identification:** Printer manufacturer and model are now displayed in the Dashboard.
*   **Ongoing Development:**
    *   **H2D Integration:** Initial monitoring capabilities for H2D systems are now active. Full integration is currently in progress.
    *   **Klipper Printer Support:** Actively under development with the goal of achieving full feature parity. Significant progress has been made.
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
