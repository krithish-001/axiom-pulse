import { Token } from "@/types/token"

export const mockTokens: Token[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `token-${i}`,
  name: `Token ${i + 1}`,
  symbol: `T${i + 1}`,
  price: +(Math.random() * 10).toFixed(4),
  liquidity: Math.floor(Math.random() * 1_000_000),
  volume: Math.floor(Math.random() * 500_000),
  marketCap: Math.floor(Math.random() * 5_000_000),
  ageMinutes: Math.floor(Math.random() * 120),
}))
