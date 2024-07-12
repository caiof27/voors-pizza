import { PizzaSizeModel } from "../models"

export interface FindPizzaSizes {
    findAll: ( ) => Promise< FindPizzaSizes.Result >
}

export namespace FindPizzaSizes {
    export type Result = PizzaSizeModel[]
}