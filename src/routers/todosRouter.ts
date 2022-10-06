import express, { Router } from "express";
import TodosController from "../controllers/TodosController";

const router = Router();
const todosController = new TodosController();
// const db = require("../../db");

router.get("/", todosController.get);

export const findAll = async () => {};

export const find = async (id: number) => {};

export const create = async (req: any, res: any) => {
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

export const update = async (id: number) => {};

export const remove = async (id: number) => {
    const item = await find(id);

    if (!id) {
        return null;
    }

    // delete [item];
};

export default router;
