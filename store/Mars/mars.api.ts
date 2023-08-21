import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Mars} from './mars.types'

export const marsApi = createApi({
    reducerPath:'api/mars',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.nasa.gov/'}),
    endpoints: build =>({
        getMars: build.query<Mars, number>({query: (page = 1)=>`mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&page=${page}`})
    })
})

export const {useGetMarsQuery} = marsApi