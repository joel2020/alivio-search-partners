import { cn } from "@/lib/utils";

/**
 * Timezone overlap graphic: each city's shared working hours with US
 * Eastern rendered as ledger bars across a 24-hour ruler.
 */
export function TimezoneGraphic({
  zones,
  workdayNote,
}: {
  zones: readonly { city: string; offset: string; overlapStart: number; overlapEnd: number }[];
  workdayNote: string;
}) {
  const DAY_START = 6; // ruler runs 06:00–20:00
  const DAY_END = 20;
  const span = DAY_END - DAY_START;
  const pct = (h: number) => ((h - DAY_START) / span) * 100;

  return (
    <figure className="border-t border-line pt-4">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-2 text-stone">
        <span className="text-eyebrow">Timezone overlap</span>
        <span className="text-xs">{workdayNote}</span>
      </figcaption>
      <div className="mt-8 space-y-5">
        {zones.map((zone, i) => (
          <div key={zone.city} className="grid grid-cols-[7.5rem_1fr_3.5rem] items-center gap-3">
            <span className="text-sm text-ink">{zone.city}</span>
            <div className="relative h-[3px] bg-line" role="presentation">
              <div
                className={cn("absolute h-full", i === 0 ? "bg-ink" : "bg-terra")}
                style={{
                  left: `${pct(zone.overlapStart)}%`,
                  width: `${pct(zone.overlapEnd) - pct(zone.overlapStart)}%`,
                }}
              />
            </div>
            <span className="text-right text-xs tabular-nums text-stone">{zone.offset}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-[7.5rem_1fr_3.5rem] gap-3">
        <span />
        <div className="flex justify-between text-[0.65rem] tabular-nums text-stone">
          <span>06:00</span>
          <span>09:00</span>
          <span>12:00</span>
          <span>17:00</span>
          <span>20:00</span>
        </div>
        <span />
      </div>
    </figure>
  );
}
