import axios from 'axios';

import {baseUrl} from './const';

export const $Nasa_api_public = axios.create({
    baseURL: baseUrl,
    headers: {
        'X-API-KEY': '7pcnN0U67aAaBAfis7z7fTEDUaJ0HMFKMYF0OIsm'
    }
});

$Nasa_api_public.interceptors.request.use((config) => {
    if (!config?.headers) {
        throw new Error('Expected \'config\' and \'config.headers\' not to be undefined');
    }
    return config;
});