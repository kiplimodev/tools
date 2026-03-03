export default function Loading() {
  return (
    <div className="max-w-xl space-y-6 animate-pulse">
      <div className="space-y-2">
        <div className="h-7 w-48 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-4 w-80 rounded bg-zinc-100 dark:bg-zinc-800/60" />
      </div>
      <div className="rounded-2xl border border-zinc-200 bg-white/70 p-6 space-y-4 dark:border-zinc-800 dark:bg-zinc-950/60">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-1.5">
            <div className="h-4 w-24 rounded bg-zinc-100 dark:bg-zinc-800/60" />
            <div className="h-10 w-full rounded-lg bg-zinc-100 dark:bg-zinc-800/60" />
          </div>
        ))}
        <div className="h-10 w-full rounded-lg bg-zinc-100 dark:bg-zinc-800/60" />
      </div>
    </div>
  );
}
