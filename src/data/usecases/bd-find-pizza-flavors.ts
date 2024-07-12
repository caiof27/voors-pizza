import { FindPizzaFlavors } from "src/domain/usecases"
import { FindPizzaFlavorsRepository } from "src/data/protocols"

export class BdFindPizzaFlavors implements FindPizzaFlavors {
    constructor(
        private readonly pizzaFlavorRepository: FindPizzaFlavorsRepository
    ){}

    async findAll() : Promise<FindPizzaFlavorsRepository.Result> {
        return this.pizzaFlavorRepository.findAll()
    }
}