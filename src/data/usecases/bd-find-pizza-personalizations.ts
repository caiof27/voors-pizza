import { FindPizzaPersonalizations } from "src/domain/usecases"
import { FindPizzaPersonalizationsRepository } from "src/data/protocols"

export class BdFindPizzaPersonalizations implements FindPizzaPersonalizations {
    constructor(
        private readonly pizzaPersonalizationRepository: FindPizzaPersonalizationsRepository
    ){}

    async findAll() : Promise<FindPizzaPersonalizationsRepository.Result> {
        return this.pizzaPersonalizationRepository.findAll()
    }
}