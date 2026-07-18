/**
 * Aurora hero backdrop: two slow-drifting accent blobs plus a faint
 * blueprint grid, clipped by the parent (which must be
 * relative + overflow-hidden). Pure CSS; animation is disabled by the
 * global prefers-reduced-motion block.
 */
export function Aurora() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-grid" />
      {/* Soft-edged radial gradients instead of filter: blur() — an
          order of magnitude cheaper to composite while scrolling. */}
      <div
        className="aurora-a absolute -top-1/4 left-[-10%] h-[70vh] w-[60vw] rounded-full opacity-30 will-change-transform"
        style={{ background: "radial-gradient(closest-side, var(--acc) 0%, rgba(69,150,255,0.35) 35%, transparent 72%)" }}
      />
      <div
        className="aurora-b absolute -top-[10%] right-[-15%] h-[60vh] w-[50vw] rounded-full opacity-25 will-change-transform"
        style={{ background: "radial-gradient(closest-side, var(--acc-2) 0%, rgba(45,217,200,0.3) 35%, transparent 72%)" }}
      />
      {/* Fade the grid and blobs into the page base */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent 40%, var(--bg0) 96%)" }}
      />
    </div>
  );
}
