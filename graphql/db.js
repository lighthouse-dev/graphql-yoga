import axios from 'axios';

const BASE_URL = 'https://yts.mx/api/v2/';
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_SUGGESTIINS_URL = `${BASE_URL}movie_suggestions.json`;

let allMovieList = [];

export const getMovies = async (limit, rating) => {
  // 初回のみリクエスト
  if (allMovieList.length === 0) {
    const {
      data: {
        data: { movies }
      }
    } = await axios(LIST_MOVIES_URL, {
      params: {
        limit,
        minimum_rating: rating
      }
    });

    allMovieList = movies;
  }

  return allMovieList;
};

export const getMovieById = async id => {
  const filteredMovie = allMovieList.filter(movie => movie.id === id);
  return filteredMovie[0];
};

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIINS_URL, {
    params: {
      movie_id: id
    }
  });

  return movies;
};

export const deleteMovie = id => {
  const cleanedMovies = allMovieList.filter(movie => movie.id !== id);

  if (allMovieList.length > cleanedMovies.length) {
    allMovieList = cleanedMovies;
    return true;
  }
  return false;
};

export const addMovie = (title, rating) => {
  const newMovie = {
    id: Number(`${allMovieList.length + 1}`),
    title,
    rating
  };
  allMovieList.push(newMovie);
  return newMovie;
};
