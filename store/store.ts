import { configureStore } from "@reduxjs/toolkit";
import { marsApi } from "./Mars/mars.api";
import { apodApi } from "./Apod/apod";
import { techtransferApi } from "./Techtransfer/techtransfer";
import { earthApi } from "./Earth/earth";
import { searchImageApi } from "./SearchImage/searchImage";

export const store = configureStore({
    reducer: {
        [marsApi.reducerPath]: marsApi.reducer,
        [apodApi.reducerPath]: apodApi.reducer,
        [techtransferApi.reducerPath]: techtransferApi.reducer,
        [earthApi.reducerPath]:earthApi.reducer,
        [searchImageApi.reducerPath]:searchImageApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            marsApi.middleware,
            apodApi.middleware,
            techtransferApi.middleware,
            earthApi.middleware,
            searchImageApi.middleware,
        ),
});

export type TypeRootState = ReturnType<typeof store.getState>;
