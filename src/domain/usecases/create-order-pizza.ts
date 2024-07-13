import { OrderPizzaModel } from "src/domain/models"

export interface CreateOrderPizza {
    create(params: CreateOrderPizza.Params): Promise<CreateOrderPizza.Result>
}

export namespace CreateOrderPizza{
    export type Params = Pick<OrderPizzaModel, 'pizzaFlavorId' | 'pizzaSizeId' | 'orderId'>
    export type Result = OrderPizzaModel
}