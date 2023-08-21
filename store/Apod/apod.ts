import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {AstronomyImage} from './apod.types'
import { ApiKey } from '../apiKey'

export const apodApi = createApi({
    reducerPath:'api/apod',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.nasa.gov/'}),
    endpoints: build =>({
        getApod: build.query<AstronomyImage[], number|void>({query: (count = 20)=>`planetary/apod?api_key=${ApiKey}&count=${count}`})
    })
})

export const {useGetApodQuery} = apodApi