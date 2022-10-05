const db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:postgres:postgres@localhost:5432/petition`
);

exports.insertDeveloper = (name: string, email: string, level: boolean) => {
    return db.query(
        `INSERT INTO users (first, last, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING id`,
        [name, email, level]
    );
};
