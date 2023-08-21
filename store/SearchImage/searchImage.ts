import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { SearchImageResponse } from './searchImage.types'

export const searchImageApi = createApi({
    reducerPath:'api/searchImage',
    baseQuery:fetchBaseQuery({baseUrl:'https://images-api.nasa.gov/'}),
    endpoints: build =>({
        getSearchImage: build.query<SearchImageResponse, string>({query: (keywords)=>`search?media_type=image&q=${keywords}`})
    })
})

export const {useGetSearchImageQuery} = searchImageApi