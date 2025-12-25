"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { Token } from "@/types/token"

interface Props {
  token: Token
  children: React.ReactNode
}

export default function TokenDetailsModal({ token, children }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

        <Dialog.Content
          className="fixed left-1/2 top-1/2 w-[90vw] max-w-md
                     -translate-x-1/2 -translate-y-1/2
                     rounded-lg border border-white/10
                     bg-[#0b0f14] p-5 text-white shadow-xl"
        >
          <Dialog.Title className="text-lg font-semibold">
            {token.name} ({token.symbol})
          </Dialog.Title>

          <Dialog.Description className="mt-1 text-sm text-white/60">
            Token details (mock data)
          </Dialog.Description>

          <div className="mt-4 space-y-2 text-sm">
            <Detail label="Price" value={`$${token.price.toFixed(4)}`} />
            <Detail label="Liquidity" value={`$${token.liquidity.toLocaleString()}`} />
            <Detail label="Volume" value={`$${token.volume.toLocaleString()}`} />
            <Detail label="Market Cap" value={`$${token.marketCap.toLocaleString()}`} />
            <Detail label="Age" value={`${token.ageMinutes} minutes`} />
          </div>

          <Dialog.Close
            className="absolute right-3 top-3 text-white/60 hover:text-white"
          >
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-white/60">{label}</span>
      <span>{value}</span>
    </div>
  )
}
