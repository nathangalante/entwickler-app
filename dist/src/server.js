"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, level } = req.body;
            db.insertDeveloper(name, email, level)
                .then(() => {
                console.log("this is body", req.body);
            })
                .catch((err) => {
                console.log("error!", err);
                res.render("error!!");
            });
        });
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