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

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
