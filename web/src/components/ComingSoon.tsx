export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4 px-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-300">
        Coming Soon
      </div>
      <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white">{title}</h1>
      <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
        This tool is under development. Check back soon.
      </p>
    </div>
  );
}
