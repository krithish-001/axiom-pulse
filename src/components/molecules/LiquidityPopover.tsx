"use client"

import * as Popover from "@radix-ui/react-popover"

interface Props {
  liquidity: number
}

export default function LiquidityPopover({ liquidity }: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="text-left hover:underline">
          ${liquidity.toLocaleString()}
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="right"
          sideOffset={8}
          className="z-50 w-48 rounded-md border border-white/10
                     bg-[#0b0f14] p-3 text-xs text-white shadow-lg"
        >
          <div className="mb-2 font-medium text-white">
            Liquidity details
          </div>

          <div className="flex justify-between text-white/70">
            <span>Total</span>
            <span>${liquidity.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-white/70">
            <span>Locked</span>
            <span>${Math.floor(liquidity * 0.6).toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-white/70">
            <span>Unlocked</span>
            <span>${Math.floor(liquidity * 0.4).toLocaleString()}</span>
          </div>

          <Popover.Arrow className="fill-[#0b0f14]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
