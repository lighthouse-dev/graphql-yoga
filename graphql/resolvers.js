import {
  getMovies,
  getMovieById,
  getSuggestions,
  addMovie,
  deleteMovie
} from './db';

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovieById(id),
    suggestions: (_, { id }) => getSuggestions(id)
  },
  Mutation: {
    addMovie: (_, { title, rating }) => addMovie(title, rating),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;
