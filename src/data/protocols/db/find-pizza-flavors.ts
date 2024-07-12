import { FindPizzaFlavors } from "src/domain/usecases"

export interface FindPizzaFlavorsRepository {
    findAll: (  ) => Promise< FindPizzaFlavorsRepository.Result >
}

export namespace FindPizzaFlavorsRepository {
    export type Result = FindPizzaFlavors.Result
}