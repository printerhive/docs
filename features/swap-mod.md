# Swap Mod with Printerhive

This page describes how Printerhive integrates with the third-party "Swap Mod" hardware add-on for the Bambu Lab A1 Mini, enabling automated sequential multi-plate printing.

## What is Swap Mod?

Swap Mod is a hardware add-on kit developed by [Swap Systems](https://swap-systems.com/product/swapmod/) designed for the Bambu Lab A1 Mini 3D printer. Its purpose is to allow the A1 Mini to automatically print on multiple build plates in sequence without manual intervention. After one plate is printed, the Swap Mod hardware ejects the finished plate and loads a new blank plate from a magazine, continuing until all queued jobs are complete or the magazine is empty.

**Key Points about the Swap Mod Hardware:**

*   It is a **third-party product**, not an original Bambu Lab product. You can purchase the kit directly from Swap Systems or their distributors.
*   It typically comes as a **DIY kit**, where you print some parts yourself and assemble them using provided components and instructions from Swap Systems.
*   Users should refer to Swap Systems for all hardware-related aspects, including purchase, assembly instructions, hardware troubleshooting, and specific safety and warranty information related to the hardware kit itself.

## Printerhive's Software Integration for Swap Mod

Printerhive provides built-in software support to control Bambu Lab A1 Mini printers equipped with the Swap Mod hardware. This integration means you do **not** need to use the "swaplist" application or other software provided by Swap Systems for managing the print queue with Printerhive.

**With Printerhive, you can:**

*   Activate or enable Swap Mod functionality directly within your printer's settings in the Printerhive interface.
*   Queue multiple G-code files (typically `.gcode.3mf` files as used by Bambu Lab printers) for sequential printing.
*   Printerhive will automatically manage the process, instructing the printer to eject a completed plate and load the next one, then starting the subsequent print job from your queue.
*   This process continues until all jobs in the queue are finished or until you manually stop the printing process via Printerhive.

## How to Use Swap Mod with Printerhive

1.  **Install Swap Mod Hardware:** Ensure the Swap Mod hardware kit from Swap Systems is correctly installed and configured on your Bambu Lab A1 Mini printer according to the manufacturer's (Swap Systems) instructions.
2.  **Enable in Printerhive:** In the Printerhive web application, navigate to your A1 Mini printer's settings. You should find an option to activate/enable "Swap Mod" functionality. Turn this on.
3.  **Queue Your Prints:** Add the G-code files you want to print sequentially to your printer's queue in Printerhive.
4.  **Start Printing:** Initiate the print sequence from Printerhive. The system will then manage the automated plate swapping and printing process.

## Benefits of Using Swap Mod with Printerhive

Leveraging the Swap Mod hardware with Printerhive's software control offers several advantages:

*   **Increased Throughput & Automation:** Print multiple plates or jobs back-to-back without manual intervention, significantly boosting productivity.
*   **Comfort & Convenience:** Collect your printed parts when you have time, not immediately after each individual plate finishes.
*   **Larger Effective Print Volume:** The total printable volume expands to the capacity of all plates in the Swap Mod magazine.
*   **Enhanced Reliability for Large Projects:** Distribute parts of a large project across multiple plates, reducing the risk of a single large print failing entirely.
*   **Optimized Machine Downtime:** Keep your printer running for longer periods, minimizing idle time and manual labor costs associated with plate changes.

## Important Considerations & Disclaimers

*   **Third-Party Hardware:** Remember that Printerhive provides the *software integration* for the Swap Mod. The Swap Mod itself is hardware developed, sold, and supported by Swap Systems. For any issues related to the physical Swap Mod kit, its assembly, or its direct mechanical operation, please consult Swap Systems.
*   **DIY Nature & Risks:** As Swap Mod is often a DIY kit, users assume responsibility for its correct assembly and installation. Be aware of the potential risks outlined by Swap Systems, including the possibility of voiding your printer's warranty due to modifications or issues arising from the add-on.
*   **Printer Compatibility:** Currently, the Swap Mod hardware from Swap Systems is specified for the **Bambu Lab A1 Mini**. Printerhive's software support for Swap Mod is therefore targeted at A1 Mini printers equipped with this specific third-party hardware.

By combining the Swap Mod hardware with Printerhive's intelligent print management, you can significantly automate and scale your A1 Mini printing operations. 