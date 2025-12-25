export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded bg-white/10 ${className ?? ""}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite]
                      bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  )
}
