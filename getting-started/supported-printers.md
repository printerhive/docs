# Supported Printers

Before setting up your hardware, it's important to verify that your 3D printer is compatible with Printerhive. This page lists all currently supported printers and their specific features.

Printerhive is primarily designed for managing Bambu Lab 3D printers, but we are actively working on expanding compatibility to other printer types.

## Bambu Lab Printers

All Bambu Lab printers require **LAN Mode** to be activated in the printer's settings for full functionality with Printerhive. This enables both print control and monitoring capabilities.

:::tip Developer Mode on Newer Firmware
On newer printer firmware versions, you may also need to enable **Developer Mode** in addition to LAN Mode. Check your printer's settings menu for this option and enable it if available.
:::

| Printer Model  | Basic Control & Monitoring | AMS Support    | Notes and Specifics                                                                                                                                                                                             |
| :------------- | :------------------------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| H2D            | Yes (Movement, Monitoring) | Yes            | Dual toolhead printer. **Print job initiation is NOT YET SUPPORTED** due to the dual toolhead complexity. Monitoring (including camera) and AMS management are functional. Basic movement control works. See [guide](/guides/activating-camera-bambu-lab-x1-h2d.md) for camera. |
| X1-Carbon      | Yes                        | Yes            | Includes camera. Camera view requires "LAN Only Liveview" to be activated. See [guide](/guides/activating-camera-bambu-lab-x1-h2d.md).                                                                         |
| X1             | Yes                        | Yes            | Similar to X1-Carbon, typically without the Lidar/AI features. Camera setup as per X1-Carbon.                                                                                                                |
| P1S            | Yes                        | Yes            | Enclosed printer, includes camera.                                                                                                                                                                            |
| P1P            | Yes                        | Yes            | Open-frame printer, includes camera (early models may have required a separate add-on, but later/current models include it as standard).                                                                       |
| A1             | Yes                        | Yes (AMS lite) | Compatible with third-party "Swap Mod" hardware for multi-plate printing. For A1 Mini details, see [Swap Mod with Printerhive](../features/swap-mod.md). A1 compatibility with similar mods needs user verification.         |
| A1 mini        | Yes                        | Yes (AMS lite) | Compatible with third-party "Swap Mod" hardware for multi-plate printing. See [Swap Mod with Printerhive](../features/swap-mod.md) for details.                                                                        |

**"Swap Mod" Feature Note:** "Swap Mod" in the context of Printerhive refers to software support for specific third-party hardware (like the kit from Swap Systems for the A1 Mini) that enables automatic plate swapping. This feature is available across all Printerhive plans, including the Free tier. For details on how Printerhive integrates with such hardware, see [Swap Mod with Printerhive](../features/swap-mod.md).

**AMS (Automatic Material System):**
*   Printerhive supports displaying the status of all connected AMS units (including AMS lite) and their individual filament slots.
*   This includes viewing filament type, color, and remaining amount (if reported by the printer/AMS).
*   Filament selection for initiating prints via AMS is a standard feature where print initiation is supported.
*   For some AMS versions (e.g., the standard AMS for X1/P1 series, AMS 2 PRO, AMS HT), Printerhive can also display temperature and humidity sensor data if available from the unit.

**"Swap Mod" Hardware Integration:**
*   Printerhive provides software integration for specific third-party hardware add-ons (like the kit from Swap Systems for the A1 Mini) that enable automatic multi-plate printing.
*   This feature is available across all Printerhive plans, including the Free tier.
*   For detailed information on how Printerhive works with this hardware, particularly for the A1 Mini, please see [Swap Mod with Printerhive](../features/swap-mod.md).
*   Users attempting to use similar hardware on an A1 (larger model) should verify software compatibility and functionality independently, as official support for this combination is not yet confirmed.

## Modified Printers

Printerhive is primarily tested with standard, unmodified printer configurations from the manufacturer.
*   **General Modifications:** If a printer modification does not fundamentally change how it communicates over the network in LAN mode or how it processes standard G-code, there is a chance Printerhive will continue to function. However, functionality cannot be guaranteed.
*   **Specific Hardware Add-ons (like Swap Mod for A1 Mini):** Printerhive may offer specific software support for certain third-party hardware modifications that enhance automation. Please refer to specific feature pages like the [Swap Mod documentation](../features/swap-mod.md) for details on supported hardware.

We recommend proceeding with caution and addressing any issues with modified printers with the Printerhive community or support.

## Planned Support

We are actively working on expanding support for other printing systems and firmwares.

### Klipper
Support for printers running Klipper firmware is actively under development with the goal of achieving full feature parity. Significant progress has been made. For the latest updates, please follow our [changelog](/changelog/).

### Prusa Printers
We also plan to introduce support for popular Prusa 3D printer models in the future. Stay tuned for more announcements!

---

Once you've confirmed your printer is supported, the next step is to review the [Hardware Requirements](./hardware-requirements.md) for your Raspberry Pi setup.

If you have questions regarding the compatibility of your specific printer or setup, feel free to contact our [community or support channels](../community/index.md). 