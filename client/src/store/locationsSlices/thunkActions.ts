import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLocations = createAsyncThunk("locations/all", async () => {
  try {
    const locations = await fetch("http://localhost:3000/api/locations");
    return await locations.json();   
  } catch (error) {
    console.log(error);
  }
})

export const getFilteredLocations = createAsyncThunk("filteredLocations/all", async ({
  location_category,
  location_district,
}: {
  location_category: string,
  location_district: string
}) => {
  try {
    const filteredLocations = await fetch(`http://localhost:3000/api/locations/search?location_category=${location_category}&location_district=${location_district}`);
    return await filteredLocations.json();   
  } catch (error) {
    console.log(error);
  }
})
