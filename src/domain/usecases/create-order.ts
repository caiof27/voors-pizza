import { OrderModel } from "src/domain/models"

export interface CreateOrder {
    create(params: CreateOrder.Params): Promise<CreateOrder.Result>
}

export namespace CreateOrder{
    export type Params = { pizzas: Pizza[] }
    export type Result = void
    type Pizza = {
        flavorId: number
        sizeId: number
        personalization?: Personalization[]
    }
    type Personalization = {
        personalizationId: number
    }

}