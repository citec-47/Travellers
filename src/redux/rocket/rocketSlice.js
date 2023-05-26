/* eslint-disable max-len */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/getter', async () => {
  try {
    const response = await axios(url);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return ('Found this error', error);
  }
});

const initialState = {
  rockets: [],
  isLoading: false,
};
const rocketSlice = createSlice({
  name: 'all-Rockets',
  initialState,
  reducers: {
    reserve: (state, action) => {
      const rocketId = action.payload;
      state.rockets = state.rockets.map((rocket) => (rocket.id !== rocketId ? rocket : { ...rocket, reserve: true }));
    },
    removeReserve: (state, action) => {
      const rocketId = action.payload;
      state.rockets = state.rockets.map((rocket) => (rocket.id !== rocketId ? rocket : ({ ...rocket, reserve: false })));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log(action.payload);
        state.rockets = action.payload.map((rocket) => ({
          id: rocket.rocket_id,
          name: rocket.rocket_name,
          description: rocket.description,
          flickr_images: rocket.flickr_images,
          reserve: false,
        }));
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.isLoading = false;
      });
  },

});
export const { reserve, removeReserve } = rocketSlice.actions;
export default rocketSlice.reducer;
