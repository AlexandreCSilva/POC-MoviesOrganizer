- genres

        POST: /genre 
            Body: { "name": "genreNameHere"}

- plataform

        POST: /plataform
            Body: { "name": "plataformNameHere"}

- movies

        POST: /movie
            Body: { 
                "name": "movieNameHere",
                "image": "imageUrl",
                "genre": "genreName",
                "plataform": "plataformName"
            }

        GET: /movies

        GET: /movies/genre/:genreName

        GET: /movies/plataform/:plataformName

        DELETE: /movie/:id

        PATCH: /movie/:id
            Body: { 
                "review": "reviewText",
                "note": number between 0 and 10
            }