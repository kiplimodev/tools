import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center space-y-6">
      <p className="text-6xl font-bold text-zinc-200 dark:text-zinc-700">404</p>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          The tool or page you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
      <Link
        href="/tools"
        className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
      >
        Browse all tools
      </Link>
    </div>
  );
}
