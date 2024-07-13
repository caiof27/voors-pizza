import { FindOrder } from "src/domain/usecases"
import { FindOrderRepository } from "src/data/protocols"

export class BdFindOrder implements FindOrder {
    constructor(
        private readonly orderRepository: FindOrderRepository
    ){}

    async findOne(params: FindOrderRepository.Params) : Promise<FindOrderRepository.Result> {
        return this.orderRepository.findOne(params)
    }
}