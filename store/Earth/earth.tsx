import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ApiKey } from '../apiKey'

export const earthApi = createApi({
    reducerPath:'api/earth',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.nasa.gov/'}),
    endpoints: build =>({
        getEarth: build.query<any, number|void>({query: (count = 20)=>`planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=${ApiKey}`})
    })
})

export const {useGetEarthQuery} = earthApi