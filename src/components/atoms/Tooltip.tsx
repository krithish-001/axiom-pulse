"use client"

import * as Tooltip from "@radix-ui/react-tooltip"
import { ReactNode } from "react"

interface Props {
  content: string
  children: ReactNode
}

export default function TooltipWrapper({ content, children }: Props) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            sideOffset={6}
            className="z-50 rounded-md bg-black px-3 py-1.5
                       text-xs text-white shadow-lg
                       animate-in fade-in zoom-in"
          >
            {content}
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
