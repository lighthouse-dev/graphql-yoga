const julee = {
  name: 'julee',
  age: '18',
  gender: 'male'
};

const resolvers = {
  Query: {
    person: () => julee
  }
};

export default resolvers;
