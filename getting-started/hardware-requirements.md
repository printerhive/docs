# Hardware Requirements for Printerhive Client

The Printerhive client application **requires a dedicated, supported Raspberry Pi device** to operate. This device acts as the local hub for managing your 3D printers, ensuring secure and reliable communication within your network.

This page details the specific Raspberry Pi models we support and the essential peripheral requirements to ensure smooth and stable performance of the Printerhive client.

## Supported Raspberry Pi Models

Printerhive is optimized for the following Raspberry Pi models:

*   **Raspberry Pi 5 (Strongly Recommended):** For the best performance, responsiveness, and future-proofing, we **strongly recommend using a Raspberry Pi 5.** Installation and operation are significantly faster on this model.
    *   *Example: Printerhive client installation takes approximately 6 minutes on an RPi 5, compared to ~37 minutes on an RPi Zero 2 W with the same SD card.*
*   **Raspberry Pi 4 Model B**
*   **Raspberry Pi 3 Model B / B+**
*   **Raspberry Pi Zero 2 W** (Suitable for basic use, but an RPi 4 or 5 offers a much better experience for managing multiple printers or more demanding tasks.)

**Unsupported Raspberry Pi Models:**
*   Raspberry Pi Zero W (the original non-2 version)
*   Older Raspberry Pi models (e.g., Raspberry Pi 1, Raspberry Pi 2)

## Essential Peripherals for Your Raspberry Pi

Once you have chosen a supported Raspberry Pi, ensure you have the following high-quality peripherals, as these are crucial for stability and performance:

*   **High-Quality SD Card:** This acts as the primary storage ("hard drive") for your Raspberry Pi. System performance and reliability heavily depend on it.
    *   **Minimum Size:** 16 GB.
    *   **Speed Class:** Use cards rated Class 10 / UHS Speed Class 1 (U1) or higher. Both high **read and write speeds** are vital. Look for cards with an **A1 or A2 (Application Performance Class)** rating for optimal application performance.
    *   **Quality & Endurance:** Strongly avoid generic or unbranded SD cards. Choose reputable brands. For continuous 24/7 operation like the Printerhive client, consider using a **High Endurance** microSD card, which is specifically designed for frequent write operations and lasts longer than standard cards.

*   **Power Supply:** A high-quality power adapter that meets the specific requirements for your Raspberry Pi model is crucial for stability.

    :::danger Critical Importance of Adequate Power
    Using an inadequate or low-quality power supply is a **primary cause of Raspberry Pi instability, data corruption, and Printerhive client crashes.** Standard mobile phone chargers, even if they have a matching connector, are often **NOT SUITABLE** as they may not provide consistent voltage and current under load. This can lead to the Printerhive client (and other software) failing unexpectedly.
    Always invest in a dedicated, high-quality power supply specifically designed for your Raspberry Pi model.
    :::

    Recommended power supply amperage for different models:
    *   Raspberry Pi 5: **5.0A** (USB-C, official Raspberry Pi 27W USB-C Power Supply recommended for Power Delivery)
    *   Raspberry Pi 4 Model B: **3.0A** (USB-C)
    *   Raspberry Pi 3 Model B/B+: **2.5A** (micro-USB)
    *   Raspberry Pi Zero 2 W: **2.0A** (micro-USB)

    It is always best to use the official Raspberry Pi power supply for your model or a reputable third-party equivalent that explicitly states compatibility and meets the required amperage.

## Using a Dedicated vs. Shared Raspberry Pi

While the Printerhive client is lightweight, we **strongly recommend dedicating a separate Raspberry Pi** solely for its operation, especially if you manage multiple printers or rely on high availability.

Some users consider installing the Printerhive client on a Raspberry Pi already running other services (like Klipper/Mainsail/Fluidd, Home Assistant, etc.) to consolidate hardware. While technically possible, here's why a dedicated Pi is better:

*   **Avoiding Interference:** Other demanding software on the same Pi could impact Printerhive's responsiveness or stability.
*   **Preventing Accidental Shutdowns:** If the Printerhive client shares a Pi that controls a 3D printer (e.g., via Klipper), actions like powering down that printer might also shut down the Printerhive client, disrupting management of other printers.
*   **Simplicity and Reliability:** A dedicated device minimizes potential software conflicts and ensures the Printerhive client is always available.
*   **Resource Availability:** Ensures Printerhive has all the necessary resources without competing with other applications.

*   **Technical Note on Docker:** The Printerhive client runs in a Docker container. If you are an advanced user running other Dockerized applications on a shared Pi, be mindful of potential port conflicts or resource contention. A dedicated Pi avoids this complexity.

Given the affordability of models like the Raspberry Pi Zero 2 W (for minimal setups) or the superior Raspberry Pi 5, dedicating a device is a small investment for ensuring smooth, reliable operation of your printer farm.

## Unsupported Hardware Configurations

To ensure stability and full functionality, the Printerhive client application is designed and optimized **exclusively for the supported Raspberry Pi models** listed above.

The following are **not supported** for hosting the Printerhive client:

*   **NAS (Network Attached Storage) Devices:** The architecture and software environment of NAS systems are not compatible.
*   **Standard Servers / Virtual Machines (VMs):** While it might be theoretically possible to run the client in a Docker container on other Linux systems or VMs, this is not officially supported and may lead to unexpected issues.
*   **Other Single-Board Computers (SBCs):** Only the Raspberry Pi models listed are supported. Other SBCs (e.g., Orange Pi, Banana Pi) are not tested or supported.

## Important Printer Configuration Note (Bambu Lab)

To enable full control features with Printerhive (like starting prints and managing print jobs, not just monitoring) for your **Bambu Lab printers**, you **must** set them to **LAN mode** in their network settings. Without LAN mode enabled, Printerhive's capabilities will be limited to monitoring only. 