import axios, { type AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export interface RequestError extends Error {
  status?: number;
  details?: any;
}

export interface ApiResponse<T> {
  data?: T;
  error?: RequestError | undefined;
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

const get = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.get<T>(url, config);
    return { data: response.data };
  } catch (error: any) {
    const status = error?.response?.status;
    const details = error?.response?.data;

    return {
      error: {
        message: `Failed to get the data from ${url}`,
        status,
        details,
        name: 'TMDB_API_ERROR',
      },
    };
  }
};

// actual API functions

export const tmdbAPI = {
  fetchPopularMovies: (page: number = 1) =>
    get<any>(`/movie/popular`, { params: { page } }),
};
