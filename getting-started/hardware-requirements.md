# Hardware Requirements

This section details the minimum and recommended hardware for running the Printerhive client smoothly.

## Minimum Requirements

*   **SD Card:** This is a critical component acting as the primary storage ("hard drive") for the Raspberry Pi. System performance and reliability heavily depend on it.
    *   **Minimum Size:** 16 GB.
    *   **Speed Class:** Class 10 / UHS Speed Class 1 (U1) or higher is essential. Both high **read and write speeds** are important. Look for cards with an **A1 or A2 (Application Performance Class)** rating for better performance when running applications.
    *   **Quality & Endurance:** We strongly advise against using generic or "noname" SD cards. Use reputable brands. For continuous operation like running Printerhive, consider using a **High Endurance** card specifically designed for frequent write operations, as standard cards can wear out quickly.
*   **Power Supply:** A high-quality power adapter meeting the specifications for your Raspberry Pi model is crucial for stability. Insufficient power can cause instability or data corruption.
    *   Raspberry Pi 3 Model B/B+: Requires **2.5A**.
    *   Raspberry Pi 4 Model B: Requires **3.0A** (USB-C).
    *   Raspberry Pi Zero 2 W: Requires **2.0A**.
    *   Always use the official Raspberry Pi power supply or a reputable third-party equivalent.

### Note for Bambulab Printers

To fully utilize our system and enable control features like starting prints, you must set your Bambulab printers to **LAN mode**. Without LAN mode enabled, Printerhive can only monitor the printer's status and cannot initiate commands or manage prints.

## Supported Devices

*   Raspberry Pi 3 and higher
*   Raspberry Pi Zero 2 W

**Unsupported:** RPi Zero 1 W

**Recommendation:** While Raspberry Pi Zero 2 W and Pi 3 are supported minimums, we **strongly recommend using a Raspberry Pi 5**. Its significantly higher performance provides a much smoother and more responsive experience when using Printerhive. For example, installing the Printerhive client takes approximately **37 minutes** on a Raspberry Pi Zero 2 W, whereas the same installation on a Raspberry Pi 5 completes in just **6 minutes** using the same SD card.

## Running on a Shared Raspberry Pi?

Some users may consider installing the Printerhive client on a Raspberry Pi already running other services (like Klipper/Mainsail/Fluidd for a 3D printer, Home Assistant, etc.) to consolidate hardware.

Printerhive itself is lightweight and designed to run efficiently, so it generally works well even on shared devices. However, we still recommend dedicating a separate Raspberry Pi for the Printerhive client for the most trouble-free experience. The main reasons are:

*   **Avoiding Interference:** Other demanding software running on the same Pi could potentially impact Printerhive's responsiveness or stability, even though Printerhive itself uses minimal resources.
*   **Preventing Accidental Shutdowns:** If the Printerhive client runs on the same Pi that controls your 3D printer, actions like powering down the printer might also shut down the Printerhive client. This would disrupt monitoring and management, especially if you have printers in other locations connected to that client.
*   **Simplicity and Reliability:** A dedicated device eliminates potential conflicts and ensures the Printerhive client is always available independently of other services.

*   **Technical Note (Docker):** For technically advanced users, it's worth noting that the Printerhive client runs within a Docker container. If you already use Docker on your shared Raspberry Pi for other applications, be mindful of potential port conflicts or resource contention between containers. While manageable, this adds a layer of complexity that a dedicated device avoids.

In conclusion, while sharing a Pi is technically feasible, dedicating one simplifies operation and maximizes reliability. Given the affordability of minimum supported devices like the Raspberry Pi Zero 2 W, and considering the relatively small cost of even a performant Raspberry Pi 5 compared to the investment in 3D printers, dedicating a Pi solely for Printerhive is the recommended approach to ensure smooth operation and avoid potential troubleshooting headaches, especially when managing multiple valuable machines. 