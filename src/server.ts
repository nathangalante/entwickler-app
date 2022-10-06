import express, { Application, Router } from "express";
import bodyParser from "body-parser";
import todosRouter from "./routers/todosRouter";
import pool from "./dbconfig/dbconnector";

const db = require("./db");
// const compression = require("compression");
const path = require("path");

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
        // this.routes();
    }

    private config() {
        // this.app.use(compression());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, "/public")));
    }

    private dbConnect() {
        pool.connect(function (err, client, done) {
            if (err) throw new Error(err.message);
            console.log("Connected");
        });
    }

    private routerConfig() {
        this.app.use("/", todosRouter);
    }

    create = async (req: any, res: any) => {
        const { name, email, level } = req.body;
        db.insertDeveloper(name, email, level)
            .then(() => {
                console.log("this is body", req.body);
            })
            .catch((err) => {
                console.log("error!", err);
                res.render("error!!");
            });
    };

    

    // public routes() {
    //     this.app.get("/", (res: any, req: any) => {
    //         res.render("login", {
    //             title: "LogIn",
    //         });
    //     });
    // }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app
                .listen(port, () => {
                    resolve(port);
                })
                .on("error", (err: Object) => reject(err));
        });
    };
}

export default Server;
