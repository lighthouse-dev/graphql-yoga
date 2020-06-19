import { people, getById, getMovies, getMoviesById, addMovie } from './db';

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
    movies: () => getMovies,
    movie: (_, { id }) => getMoviesById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score)
  }
};

export default resolvers;
