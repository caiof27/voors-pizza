import { FindPizzaSizes } from "src/domain/usecases"
import { FindPizzaSizesRepository } from "../protocols"

export class BdFindPizzaSizes implements FindPizzaSizes {
    constructor(
        private readonly pizzaSizeRepository: FindPizzaSizesRepository
    ){}

    async findAll() : Promise<FindPizzaSizesRepository.Result> {
        return this.pizzaSizeRepository.findAll()
    }
}