import { FindPizzaPersonalizations } from "src/domain/usecases"

export interface FindPizzaPersonalizationsRepository {
    findAll: (  ) => Promise< FindPizzaPersonalizationsRepository.Result >
}

export namespace FindPizzaPersonalizationsRepository {
    export type Result = FindPizzaPersonalizations.Result
}