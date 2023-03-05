import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoNewsHeaders = {
	'X-RapidAPI-Key': '25f5d22f01msh7cea93537c6e0e9p17e47ajsn55a5657de024',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
};

const baseUrl = "https://crypto-news16.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
	reducerPath: "cryptoNewsApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: (count) => createRequest(`/news/top/${count}`),
		}),
	}),
});
 
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
