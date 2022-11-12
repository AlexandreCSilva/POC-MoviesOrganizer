CREATE DATABASE moviesOrganizer;

CREATE TABLE "movies" (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
    image  VARCHAR NOT NULL,
    "genresId" INTEGER REFERENCES "genres"("id"),
    "plataformsId" INTEGER REFERENCES "plataforms"("id"),
    review TEXT,
    note INTEGER
);

CREATE TABLE "genres" (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL
);

CREATE TABLE "plataforms" (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL
);
