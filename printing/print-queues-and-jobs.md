---
description: "Manage current prints, queued jobs, print history, custom queues, printer matching, and scheduled starts in Printerhive."
---

# Print Queues and Jobs

The print queue is the center of production in Printerhive. It shows what is printing now, what is waiting, and what has already finished.

## Job states

Printerhive separates print work into three main areas:

- **Current prints:** jobs that are running or preparing to start.
- **Queue:** jobs waiting for a printer.
- **History:** completed, failed, cancelled, or previously printed jobs.

This separation makes it easier to see what needs attention now and what can wait.

## Adding jobs to the queue

You can create queued jobs from several places:

- a file or plate in the file library,
- a product or project item,
- an order item,
- a repeated job from print history,
- a slicer upload flow such as OrcaSlicer.

Before sending a job, check the selected plate, quantity, printer compatibility, filament, and optional preheating settings.

## Printer matching

Printerhive can help choose a suitable printer for a job. Matching may use information such as:

- printer type and model,
- nozzle size,
- required filament type and color,
- AMS or external spool availability,
- current printer state,
- queue and workload.

Printer matching is a helper, not a replacement for judgment. For unusual materials, special plates, or strict customer requirements, verify the selected printer before starting the job.

## Custom queues

Custom queues let you split production into smaller groups. Typical uses:

- orders waiting for production,
- urgent jobs,
- batches for a specific customer,
- work for a specific material,
- jobs that need manual review.

You can move selected jobs between queues and use queues to keep production work readable instead of having one long mixed list.

## Scheduling and preheating

Scheduled prints start later instead of immediately. Use this when a job should begin at a specific time or after working hours.

Depending on the printer and job settings, you may also configure preheating. Preheating helps reduce idle time, but use it carefully when the printer is unattended.

See also [Scheduled Prints](/features/scheduled-prints).

## Filament warnings before print

When Printerhive knows the required filament and available spool or AMS data, it can warn about possible mismatches:

- wrong filament type,
- wrong color,
- not enough material remaining,
- unsuitable AMS tray or external spool.

Treat these warnings seriously. They are there to prevent failed prints, wrong-color production, and half-finished jobs.

## Resetting a stuck job

If a print gets stuck in a preparing or unresponsive state, use the reset option from the job detail or queue actions. Resetting attempts to clear the stuck command and return the job to a manageable state.

If jobs get stuck repeatedly, check:

1. printer network connection,
2. client status,
3. printer firmware state,
4. whether the same file fails every time.

For connection issues, see [Troubleshooting](/troubleshooting/).

## Good production habits

- Keep urgent work in a separate queue.
- Use products for repeatable items and projects for one-off work.
- Check filament warnings before starting a batch.
- Keep printer names and locations clear.
- Review failed jobs in history before repeating them.
