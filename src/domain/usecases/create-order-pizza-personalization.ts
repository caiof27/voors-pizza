import { OrderPizzaPersonalizationModel } from "src/domain/models"

export interface CreateOrderPizzaPersonalization {
    create(params: CreateOrderPizzaPersonalization.Params): Promise<CreateOrderPizzaPersonalization.Result>
}

export namespace CreateOrderPizzaPersonalization{
    export type Params = { personalization: Personalization[], orderPizzaId: number}
    type Personalization = {
        personalizationId: number
    }
    export type Result = void
}