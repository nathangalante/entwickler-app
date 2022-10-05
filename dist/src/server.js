"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todosRouter_1 = __importDefault(require("./routers/todosRouter"));
const dbconnector_1 = __importDefault(require("./dbconfig/dbconnector"));
const db = require("./db");
// const compression = require("compression");
const path = require("path");
class Server {
    constructor() {
        // public routes() {
        //     this.app.get("/", (res: any, req: any) => {
        //         res.render("login", {
        //             title: "LogIn",
        //         });
        //     });
        // }
        this.start = (port) => {
            return new Promise((resolve, reject) => {
                this.app
                    .listen(port, () => {
                    resolve(port);
                })
                    .on("error", (err) => reject(err));
            });
        };
        this.app = (0, express_1.default)();
        this.config();
        this.routerConfig();
        this.dbConnect();
        // this.routes();
    }
    config() {
        // this.app.use(compression());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static(path.join(__dirname, "/public")));
    }
    dbConnect() {
        dbconnector_1.default.connect(function (err, client, done) {
            if (err)
                throw new Error(err.message);
            console.log("Connected");
        });
    }
    routerConfig() {
        this.app.use("/", todosRouter_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map