import { FindOrder } from "src/domain/usecases"

export interface FindOrderRepository {
    findOne: ( params: FindOrderRepository.Params ) => Promise < FindOrderRepository.Result >
}

export namespace FindOrderRepository {
    export type Params = FindOrder.Params
    export type Result = FindOrder.Result
}