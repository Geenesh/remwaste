import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSkips, SkipHire } from "./skipApi";

interface SkipsState {
  data: SkipHire[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SkipsState = {
  data: [],
  status: "idle",
  error: null,
};

const skipsSlice = createSlice({
  name: "skips",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkips.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSkips.fulfilled, (state, action: PayloadAction<SkipHire[]>) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSkips.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch skips";
      });
  },
});

export default skipsSlice.reducer;
