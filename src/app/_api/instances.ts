import axios from 'axios';

export const rapperInstance = axios.create({ baseURL: 'https://reqres.in/' });
