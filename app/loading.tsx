export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        {/* Animated logo mark */}
        <div className="relative">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-navy-600 to-teal-500 flex items-center justify-center shadow-lg animate-pulse">
            <span className="text-2xl font-black text-white select-none">N</span>
          </div>
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-navy-400 dark:border-t-teal-400 animate-spin" />
        </div>

        {/* Skeleton lines */}
        <div className="space-y-3 w-64">
          <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
          <div className="h-3 rounded-full bg-slate-100 dark:bg-slate-700/60 w-4/5 animate-pulse" style={{ animationDelay: "150ms" }} />
          <div className="h-3 rounded-full bg-slate-100 dark:bg-slate-700/60 w-3/5 animate-pulse" style={{ animationDelay: "300ms" }} />
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-600 font-medium tracking-widest uppercase animate-pulse">
          Loading portfolio…
        </p>
      </div>
    </div>
  );
}
