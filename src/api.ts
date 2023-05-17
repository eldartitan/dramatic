import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
    baseURL: API_URL,
});

export async function getDetail(
    id: number | string | undefined,
    category: string | undefined
) {
    try {
        const response = await instance.get(`/${category}/${id}`, {
            params: {
                api_key: API_KEY,
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getMoviePopular() {
    try {
        const response = await instance.get("/movie/popular", {
            params: {
                api_key: API_KEY,
                region: "kz",
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getImages(
    id: number | string | undefined,
    category: string | undefined
) {
    try {
        const response = await instance.get(`/${category}/${id}/images`, {
            params: {
                api_key: API_KEY,
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getCredits(
    id: number | string | undefined,
    category: string | undefined
) {
    try {
        const response = await instance.get(`/${category}/${id}/credits`, {
            params: {
                api_key: API_KEY,
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getSimilar(
    id: number | string | undefined,
    category: string | undefined
) {
    try {
        const response = await instance.get(`/${category}/${id}/similar`, {
            params: {
                api_key: API_KEY,
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getVideos(
    id: number | string | undefined,
    category: string | undefined
) {
    try {
        const response = await instance.get(`/${category}/${id}/videos`, {
            params: {
                api_key: API_KEY,
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getSearch(
    queryText: string | undefined
) {
    try {
        const response = await instance.get(`/search/multi`, {
            params: {
                query: queryText,
                include_adult: true,
                api_key: API_KEY,
                laguage: "en-US",
            },
            
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getTrending() {
    try {
        const response = await instance.get(
            "/trending/all/week?language=en-US",
            {
                params: {
                    api_key: API_KEY,
                },
            }
        );
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

