import { OrderPizzaModel } from "./order-pizza"

export interface OrderModel {
    id: number
    createdAt: Date

    pizzas?: OrderPizzaModel[]

    finalPrize?: Number

}