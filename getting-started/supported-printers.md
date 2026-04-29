---
description: "Supported Bambu Lab, Klipper, and Prusa printers, feature differences, LAN mode requirements, and client network requirements."
---

# Supported Printers

Before setting up your hardware, it's important to verify that your 3D printer is compatible with Printerhive. This page lists all currently supported printers and their specific features.

## Bambu Lab Printers - Best Support
**Best supported printer family in Printerhive**

### Supported Models
- X1 Series (X1, X1C, X1E)
- X2D
- P1 Series (P1P, P1S)
- P2S
- A1 Series (A1, A1 mini)
- H2 Series (H2D, H2S)

### Features
- AMS integration, including tray/material/color information where available
- Real-time status, temperatures, and print progress
- Camera streams on supported models and firmware
- Skip objects during print where supported by the printer and LAN workflow
- Remote calibration and printer control actions where supported
- Multi-hotend / dual-nozzle handling for supported models such as H2D/H2S/X2D
- Printer matching based on model, nozzle, filament, and job requirements
- Full production workflow with files, queues, history, products, projects, and orders

## Klipper Printers - Full Support
**Complete functionality for all Klipper-based printers**

### Works With
- Voron (all models)
- RatRig
- Custom Klipper builds
- Any printer running Moonraker API

### Features
- Full remote control and monitoring
- Macro support and execution
- OrcaSlicer direct integration
- Print from anywhere without VPN setup
- Data mirroring (works alongside your existing workflow)
- Queue management and scheduling
- Complete print history
- All Printerhive features available

## Prusa Printers
**Basic support for newer models**

### Supported Models
- MK4 (with PrusaLink)
- XL (with PrusaLink)
- Other models with PrusaLink enabled

### Features
- Remote monitoring
- Print job control
- Basic queue management
- File upload and management

:::info Enhanced Prusa Support
Enhanced Prusa support is on our roadmap for future updates.
:::

## Requirements

### All Printers
- Raspberry Pi (or similar device) running Printerhive client
- Printers must be on the same local network as the Raspberry Pi
- Internet connection for cloud sync

### Bambu Lab
- Printer in LAN mode (recommended) or Cloud mode
- Latest firmware version recommended

:::tip Developer Mode on Newer Firmware
On newer printer firmware versions, you may also need to enable **Developer Mode** in addition to LAN Mode. Check your printer's settings menu for this option and enable it if available.
:::

### Klipper
- Moonraker API enabled
- Network access to printer

### Prusa
- PrusaLink enabled
- Network access to printer

---

Once you've confirmed your printer is supported, the next step is to review the [Hardware Requirements](./hardware-requirements.md) for your Raspberry Pi setup.

If you have questions regarding the compatibility of your specific printer or setup, feel free to contact our [community or support channels](../community/index.md). 