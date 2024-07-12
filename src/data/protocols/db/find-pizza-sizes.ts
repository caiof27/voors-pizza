import { FindPizzaSizes } from "src/domain/usecases"

export interface FindPizzaSizesRepository {
    findAll: (  ) => Promise< FindPizzaSizesRepository.Result >
}

export namespace FindPizzaSizesRepository {
    export type Result = FindPizzaSizes.Result
}