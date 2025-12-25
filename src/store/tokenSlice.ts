import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TokenState {
  selectedTokenId: string | null
  prices: Record<string, number>
}

const initialState: TokenState = {
  selectedTokenId: null,
  prices: {},
}

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    selectToken(state, action: PayloadAction<string>) {
      state.selectedTokenId = action.payload
    },
    updatePrice(
      state,
      action: PayloadAction<{ id: string; price: number }>
    ) {
      state.prices[action.payload.id] = action.payload.price
    },
  },
})

export const { selectToken, updatePrice } = tokenSlice.actions
export default tokenSlice.reducer
