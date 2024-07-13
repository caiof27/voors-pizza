import { CreateOrderPizza } from "src/domain/usecases"

export interface CreateOrderPizzaRepository {
    create: ( params: CreateOrderPizzaRepository.Params ) => Promise < CreateOrderPizzaRepository.Result >
}

export namespace CreateOrderPizzaRepository {
    export type Params = CreateOrderPizza.Params
    export type Result = CreateOrderPizza.Result
}