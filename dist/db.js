const pg = require("pg");
const db = pg(process.env.DATABASE_URL ||
    `postgres:postgres:postgres@localhost:5432/entwicklerapp`);
exports.insertDeveloper = (name, email, level) => {
    return db.query(`INSERT INTO entwickler (name, email, level)
    VALUES ($1, $2, $3, $4)
    RETURNING id`, [name, email, level]);
};
exports.updateDeveloper = (name, email, level, id) => {
    return db.query(`UPDATE entwickler SET name = $1, email = $2, level = $3 WHERE id = $4`, [name, email, level, id]);
};
exports.readDeveloper = (name, email, level) => {
    return db.query(`SELECT * FROM entwickler`, [name, email, level]);
};
exports.deleteDeveloper = (name, email, level, id) => {
    return db.query(`DELETE FROM entwickler WHERE id=$1`, [
        name,
        email,
        level,
        id,
    ]);
};
//# sourceMappingURL=db.js.map