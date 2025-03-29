import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./operations";
import storage from "redux-persist/lib/storage";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		token: null,
		status: "idle",
	},
	reducers: {
		logout: (state) => {
			state.user = null;
			state.token = null;
			storage.removeItem("persist:auth");
		},
		login: (state, action) => {
			state.user = action.payload;
			state.token = action.payload.token;
			storage.setItem("persist:auth", JSON.stringify(action.payload));
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.status = "loading";
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.user = action.payload;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(loginUser.pending, (state) => {
				state.status = "loading";
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.user = action.payload;
				state.token = action.payload.token;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
    selectors: {
        selectAuthUserId: ({ user: { id } }) => id,
        selectToken: ({ token }) => token,
    },
});

export const { logout } = authSlice.actions;
export const { selectAuthUserId, selectToken } = authSlice.selectors;

export const isCurrentAuthUser = (userId) => (state) =>
  selectAuthUserId(state) === parseInt(userId);
export default authSlice.reducer;
