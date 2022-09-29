import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";

let items: Items = {
    1: {
        id: 1,
        name: "Thomas",
        email: "something@gmail.com",
        level: true,
    },
    2: {
        id: 2,
        name: "Ben",
        email: "something@gmail.com",
        level: false,
    },
    3: {
        id: 3,
        name: "Peter",
        email: "something@gmail.com",
        level: false,
    },
};

export const findAll = async (): Promise<Items> => {...};

export const find = async (id: number): Promise<Item> => {...};

export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};

export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};
