export interface BaseItem {
    name: string;
    email: string;
    level: boolean;
}

export interface Item extends BaseItem {
    id: number;
}
