import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { marsApi } from "./Mars/mars.api";
import { apodApi } from "./Apod/apod";
import { techtransferApi } from "./Techtransfer/techtransfer";
import { earthApi } from "./Earth/earth";
import { searchImageApi } from "./SearchImage/searchImage";
import searchImageSlice from "./SearchImage/searchImageSlice";

const rootReducer = combineReducers({
    searchImageSlice,
    [marsApi.reducerPath]: marsApi.reducer,
    [apodApi.reducerPath]: apodApi.reducer,
    [techtransferApi.reducerPath]: techtransferApi.reducer,
    [earthApi.reducerPath]: earthApi.reducer,
    [searchImageApi.reducerPath]: searchImageApi.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                marsApi.middleware,
                apodApi.middleware,
                techtransferApi.middleware,
                earthApi.middleware,
                searchImageApi.middleware
            ),
    });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']