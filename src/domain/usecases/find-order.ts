import { OrderModel } from "src/domain/models"

export interface FindOrder {
    findOne(params: FindOrder.Params) : Promise<FindOrder.Result>
}

export namespace FindOrder {
    export type Params = Pick<OrderModel, 'id'>
    export type Result = OrderModel
}