"use client"

import { useEffect, useState } from "react"
import TokenRow from "@/components/molecules/TokenRow"
import TokenRowSkeleton from "@/components/molecules/TokenRowSkeleton"
import TooltipWrapper from "@/components/atoms/Tooltip"
import { mockTokens } from "@/services/mockTokens"
import { Token } from "@/types/token"

export default function TokenTable() {
  const [loading, setLoading] = useState(true)
  const [tokens, setTokens] = useState<Token[]>(mockTokens)
  const [sortAsc, setSortAsc] = useState(false)

  // Skeleton loading
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  // Fake WebSocket price updates
  useEffect(() => {
    if (loading) return

    const interval = setInterval(() => {
      setTokens((prev) =>
        prev.map((t) => ({
          ...t,
          price: +(t.price * (1 + (Math.random() - 0.5) / 50)).toFixed(4),
        }))
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [loading])

  const sortedTokens = [...tokens].sort((a, b) =>
    sortAsc ? a.price - b.price : b.price - a.price
  )

  return (
    <section className="mx-auto max-w-[1400px] px-4">
      <div className="mt-6 rounded-xl border border-white/10 bg-[#0e131a]">

        {/* Header */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_80px]
                        h-12 items-center border-b border-white/10
                        text-xs text-white/60">

          <div className="px-4">Token</div>

          <TooltipWrapper content="Live price (mock WebSocket)">
            <button
              onClick={() => setSortAsc((v) => !v)}
              className={`px-4 flex items-center gap-1 transition-colors
                ${sortAsc ? "text-green-400" : "text-white/70"}
                hover:text-white`}
            >
              Price
              <span className="text-xs">
                {sortAsc ? "↑" : "↓"}
              </span>
            </button>
          </TooltipWrapper>

          <div className="px-4">Liquidity</div>
          <div className="px-4">Volume</div>
          <div className="px-4">Market Cap</div>
          <div className="px-4">Age</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/5">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <TokenRowSkeleton key={i} />
              ))
            : sortedTokens.map((token) => (
                <TokenRow key={token.id} token={token} />
              ))}
        </div>

      </div>
    </section>
  )
}
