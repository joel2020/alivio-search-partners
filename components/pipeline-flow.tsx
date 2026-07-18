import { Reveal } from "@/components/reveal";

export type PipelineStep = {
  readonly index: string;
  readonly name: string;
  readonly capability: string;
  readonly body: string;
};

/**
 * The AI agent pipeline as a connected visual:
 * Source -> Match -> Screen -> Engage -> Shortlist -> Hire.
 * Desktop: 6-across with a connecting rail. Mobile: vertical rail.
 */
export function PipelineFlow({ steps }: { steps: readonly PipelineStep[] }) {
  return (
    <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
      {/* Connecting rail (desktop) */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-[13px] hidden h-px lg:block"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--acc) 12%, var(--acc-2) 88%, transparent)",
          opacity: 0.45,
        }}
      />
      {steps.map((step, i) => (
        <Reveal as="li" key={step.name} delay={i * 0.07} className="relative">
          <div className="flex items-center gap-3 lg:block">
            <span className="glow-acc relative z-10 flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full bg-bg2 text-[0.7rem] font-semibold text-acc">
              {step.index}
            </span>
            <h3 className="font-display text-lg font-semibold tracking-tight text-tx-1 lg:mt-5">
              {step.name}
            </h3>
          </div>
          <p className="mt-2 text-xs font-medium text-acc-2/90">{step.capability}</p>
          <p className="mt-2 text-sm leading-relaxed text-tx-2">{step.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}
