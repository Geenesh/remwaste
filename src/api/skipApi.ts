import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface SkipHire {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: null | number;
  per_tonne_cost: null | number;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: null;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export const fetchSkips = createAsyncThunk(
  "skips/fetchSkips",
  async ({ postcode, area }: { postcode: string; area: string }) => {
    const response = await axios.get<SkipHire[]>(
      `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
    );
    return response.data;
  }
);
