import { Skeleton } from "@/components/atoms/Skeleton"

export default function TokenRowSkeleton() {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_80px]
                    h-[52px] items-center px-4">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-4 w-12" />
    </div>
  )
}
