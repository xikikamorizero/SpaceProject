import {CollectionItem} from './searchImage.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {fetchSearchImage} from './searchImageThunk';

interface ImageState {
    data: CollectionItem[] | null;
    isLoading: boolean;
    error: string;
}

const initialState: ImageState = {
    data:null,
    isLoading: false,
    error: '',
}

export const searchImageSlice = createSlice({
    name: 'searchImage',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSearchImage.fulfilled.type]: (state, action: PayloadAction<CollectionItem[]>) => {
            state.isLoading = false;
            state.error = ''
            state.data = action.payload;
        },
        [fetchSearchImage.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchSearchImage.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default searchImageSlice.reducer;