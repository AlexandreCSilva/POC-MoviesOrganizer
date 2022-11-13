import pg from 'pg';

const { Pool } = pg;

const connection = new Pool({
    user: 'postgres',
    password: '12345',
    connectionString: process.env.DATABASE_URL,
    database: 'moviesorganizer',
})

export { 
    connection
};