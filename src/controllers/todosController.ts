import pool from "../dbconfig/dbconnector";

class TodosController {
    public async get(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM entwickler";
            const { rows } = await client.query(sql);
            const todos = rows;

            client.release();
            console.log("hello! we're in!");
            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default TodosController;
