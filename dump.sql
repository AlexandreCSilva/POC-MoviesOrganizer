CREATE DATABASE "moviesorganizer";

CREATE TABLE "genres" (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL
);

CREATE TABLE "plataforms" (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL
);

CREATE TABLE "movies" (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
    image  VARCHAR NOT NULL,
    "genreId" INTEGER REFERENCES "genres"("id"),
    "plataformId" INTEGER REFERENCES "plataforms"("id"),
    review TEXT,
    note INTEGER
);