import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { SearchImageResponse } from "./searchImage.types";
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e) {
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }

export const fetchSearchImage = createAsyncThunk(
    "searchImage/fetchAll",
    async (stringValue: string, thunkAPI) => {
        try {
            if (stringValue == "") {
                return null;
            } else {
                const response = await axios.get<SearchImageResponse>(
                    `https://images-api.nasa.gov/search?media_type=image&q=${stringValue}`
                );
                return response.data.collection.items;
            }
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить данные");
        }
    }
);
