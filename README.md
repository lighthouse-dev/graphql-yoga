# graphql-yoga

http://localhost:4000/

## Install

    yarn insatll

## Start server

    yarn start


## Query example

```
query {
	movies(rating: 8.5, limit: 3) {
    id, title, rating
  }
  movie(id: 18115) {
    id, description_full
  }
  suggestions(id: 18115) {
    id, title
  }
}
```
