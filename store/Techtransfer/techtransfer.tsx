import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {TechtransferResponse} from './techtransfer.types'
import { ApiKey } from '../apiKey'

export const techtransferApi = createApi({
    reducerPath:'api/techtransfer',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.nasa.gov/techtransfer/'}),
    endpoints: build =>({
        getTechtransfer: build.query<TechtransferResponse, number>({query: ()=>`patent/?engine&api_key=${ApiKey}`})
    })
})

export const {useGetTechtransferQuery} = techtransferApi