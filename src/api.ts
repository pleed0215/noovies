import axios from "axios";

const API_KEY = "fbf6b8cf40575086aa6bf86c6c64f56e";

const movieApiConfig = (page: number) => ({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
    language: "ko-KR",
  },
});

export const movieApi = {
  nowPlaying: (page: number = 1) =>
    axios.get("movie/now_playing", movieApiConfig(page)),
  upcoming: (page: number = 1) =>
    axios.get("movie/upcoming", movieApiConfig(page)),
  topRated: (page: number = 1) =>
    axios.get("movie/top_rated", movieApiConfig(page)),
  popular: (page: number = 1) =>
    axios.get("movie/popular", movieApiConfig(page)),
  discover: (page: number = 1) =>
    axios.get("discover/movie", movieApiConfig(page)),
  detail: (id: number) =>
    axios.get(`movie/${id}`, {
      ...movieApiConfig,
      params: {
        api_key: API_KEY,
        language: "ko-KR",
        append_to_response: "videos",
      },
    }),
  search: (query: string, page: number = 1) =>
    axios.get("search/movie", {
      ...movieApiConfig,
      params: {
        api_key: API_KEY,
        language: "ko-KR",
        query: encodeURIComponent(query),
        include_adult: true,
        page,
      },
    }),
};

export const tvApi = {
  topRated: (page: number = 1) =>
    axios.get("tv/top_rated", movieApiConfig(page)),
  popular: (page: number = 1) => axios.get("tv/popular", movieApiConfig(page)),
  airingToday: (page: number = 1) =>
    axios.get("tv/airing_today", movieApiConfig(page)),
  detail: (id: number) =>
    axios.get(`tv/${id}`, {
      ...movieApiConfig,
      params: {
        api_key: API_KEY,
        language: "ko-KR",
        append_to_response: "videos",
      },
    }),
  onTheAir: (page: number = 1) =>
    axios.get("tv/on_the_air", movieApiConfig(page)),
  search: (query: string, page: number = 1) =>
    axios.get("search/tv", {
      ...movieApiConfig,
      params: {
        api_key: API_KEY,
        language: "ko-KR",
        query: encodeURIComponent(query),
        include_adult: true,
        page,
      },
    }),
};

export const apiImageUrl = (path: string) =>
  `https://image.tmdb.org/t/p/w500${path}`;
