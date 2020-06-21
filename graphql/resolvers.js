import {
  people,
  getById,
  getMovies,
  getMoviesById,
  addMovie,
  deleteMovie
} from './db';

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
    movies: () => getMovies(),
    movie: (_, { id }) => getMoviesById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;
