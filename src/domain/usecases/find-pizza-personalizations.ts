import { PizzaPersonalizationModel } from "src/domain/models"

export interface FindPizzaPersonalizations {
    findAll: ( ) => Promise< FindPizzaPersonalizations.Result >
}

export namespace FindPizzaPersonalizations {
    export type Result = PizzaPersonalizationModel[]
}