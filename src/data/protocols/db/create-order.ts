import { OrderModel } from "src/domain/models"

export interface CreateOrderRepository {
    create: () => Promise < CreateOrderRepository.Result >
}

export namespace CreateOrderRepository {
    export type Result = OrderModel
}