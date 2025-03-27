import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categories/categorySlice";
import profileReducer from "./profile/profileSlice";
import areasReducer from "./areaSlice";
import ingredientsReducer from "./ingredientSlice";
import authReducer from "./auth/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    areas: areasReducer,
    ingredients: ingredientsReducer,
    auth: persistedAuthReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
