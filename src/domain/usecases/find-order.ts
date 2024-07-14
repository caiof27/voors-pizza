import { OrderModel, OrderPizzaModel, PizzaPersonalizationModel } from "src/domain/models"

export interface FindOrder {
    findOne(params: FindOrder.Params) : Promise<FindOrder.Result>
}

export namespace FindOrder {
    export type Params = Pick<OrderModel, 'id'>
    export type Result = Pick<OrderModel, 'finalPrize'> & { pizzas: PizzasModel[]}
    type PizzasModel = Pick<OrderPizzaModel, 'flavorName' | 'sizeName' | 'totalPrize' | 'totalTime'> & { personalization?: PersonalizationModel[] }
    type PersonalizationModel = Pick<PizzaPersonalizationModel, 'personalizationName'>
}