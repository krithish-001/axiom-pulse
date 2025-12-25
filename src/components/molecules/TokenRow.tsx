"use client"

import { memo, useEffect, useRef, useState } from "react"
import { Token } from "@/types/token"
import TokenDetailsModal from "@/components/modals/TokenDetailsModal"
import LiquidityPopover from "@/components/molecules/LiquidityPopover"

interface Props {
  token: Token
}

const TokenRow = memo(({ token }: Props) => {
  const prevPriceRef = useRef(token.price)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const [flash, setFlash] = useState<"up" | "down" | null>(null)

  useEffect(() => {
    if (token.price === prevPriceRef.current) return

    const direction = token.price > prevPriceRef.current ? "up" : "down"
    setFlash(direction)
    prevPriceRef.current = token.price

    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      setFlash(null)
    }, 500)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [token.price])

  return (
    <div
      className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_80px]
                 h-[52px] items-center px-4 text-sm
                 hover:bg-white/5 transition-colors"
    >
      {/* Token name → modal */}
      <TokenDetailsModal token={token}>
        <button className="text-left font-medium hover:underline">
          {token.name}
          <span className="ml-2 text-xs text-white/50">
            {token.symbol}
          </span>
        </button>
      </TokenDetailsModal>

      {/* Price with TEXT glow only */}
      <div
        className={[
          "font-medium transition-colors duration-300",
          flash === "up" &&
            "text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]",
          flash === "down" &&
            "text-red-400 drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        ${token.price.toFixed(4)}
      </div>

      <LiquidityPopover liquidity={token.liquidity} />
      <div>${token.volume.toLocaleString()}</div>
      <div>${token.marketCap.toLocaleString()}</div>
      <div className="text-white/70">{token.ageMinutes}m</div>
    </div>
  )
})

TokenRow.displayName = "TokenRow"
export default TokenRow
