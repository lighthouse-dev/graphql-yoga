export const people = [
  {
    id: '1',
    name: 'julee',
    age: '18',
    gender: 'male'
  },
  {
    id: '2',
    name: 'hoge',
    age: '28',
    gender: 'male'
  },
  {
    id: '3',
    name: 'hoge',
    name: 'fuga',
    age: '38',
    gender: 'male'
  }
];

let movies = [
  {
    id: '1',
    name: 'Avengers - The new one',
    score: 8
  },
  {
    id: '2',
    name: 'The Godfather I',
    score: 9
  },
  {
    id: '3',
    name: 'Logan',
    score: 7
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};

export const getMovies = movies;

export const getMoviesById = id => {
  const filteredMovie = movies.filter(movie => movie.id === String(id));
  return filteredMovie[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id === String(id));

  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
