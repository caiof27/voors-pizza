import { CreateOrderPizzaPersonalization } from "src/domain/usecases"

export interface CreateOrderPizzaPersonalizationRepository {
    create: ( params: CreateOrderPizzaPersonalizationRepository.Params ) => Promise < CreateOrderPizzaPersonalizationRepository.Result >
}

export namespace CreateOrderPizzaPersonalizationRepository {
    export type Params = CreateOrderPizzaPersonalization.Params
    export type Result = CreateOrderPizzaPersonalization.Result
}