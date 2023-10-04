import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLocations = createAsyncThunk("locations/all", async () => {
  const result = await fetch("http://localhost:3002/api/locations");
  return result.json();
})