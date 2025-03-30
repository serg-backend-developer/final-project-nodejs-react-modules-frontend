import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentProfile, fetchProfile, updateAvatar } from "./operations";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    currentProfile: null,
    selectedProfile: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrentProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentProfile = action.payload;
      })
      .addCase(fetchCurrentProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedProfile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateAvatar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (state.currentProfile) {
          state.currentProfile.avatar = action.payload.avatar;
        }
        if (state.selectedProfile) {
          state.selectedProfile.avatar = action.payload.avatar;
        }
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;
