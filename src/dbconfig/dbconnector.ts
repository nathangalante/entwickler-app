import { Pool } from "pg";

export default new Pool({
    max: 20,
    connectionString: "postgres:postgres:postgres@localhost:5432/entwicklerapp",
    idleTimeoutMillis: 30000,
});
