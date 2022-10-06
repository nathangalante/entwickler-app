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
exports.remove = exports.update = exports.create = exports.find = exports.findAll = void 0;
const express_1 = require("express");
const TodosController_1 = __importDefault(require("../controllers/TodosController"));
const router = (0, express_1.Router)();
const todosController = new TodosController_1.default();
// const db = require("../../db");
router.get("/", todosController.get);
const findAll = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.findAll = findAll;
const find = (id) => __awaiter(void 0, void 0, void 0, function* () { });
exports.find = find;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.create = create;
const update = (id) => __awaiter(void 0, void 0, void 0, function* () { });
exports.update = update;
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield (0, exports.find)(id);
    if (!id) {
        return null;
    }
    // delete [item];
});
exports.remove = remove;
exports.default = router;
//# sourceMappingURL=todosRouter.js.map