import { useMemo } from "react"
import { Token } from "@/types/token"

export type SortKey = "price" | null
export type SortDirection = "asc" | "desc"

export function useSortedTokens(
  tokens: Token[],
  sortKey: SortKey,
  direction: SortDirection
) {
  return useMemo(() => {
    if (!sortKey) return tokens

    const sorted = [...tokens].sort((a, b) => {
      return direction === "asc"
        ? a[sortKey] - b[sortKey]
        : b[sortKey] - a[sortKey]
    })

    return sorted
  }, [tokens, sortKey, direction])
}
