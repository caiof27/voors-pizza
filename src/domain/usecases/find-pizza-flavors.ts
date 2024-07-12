import { PizzaFlavorModel } from "src/domain/models"

export interface FindPizzaFlavors {
    findAll: ( ) => Promise< FindPizzaFlavors.Result >
}

export namespace FindPizzaFlavors {
    export type Result = PizzaFlavorModel[]
}