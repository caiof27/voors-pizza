import { BdFindPizzaSizes } from "src/data/usecases"
import { FindPizzaSizes } from "src/domain/usecases"
import { PizzaSizeRepository } from "src/infra/orm/repositories"
import { FIND_PIZZA_SIZES_FACTORY } from "src/main/factories/providers"

export const findPizzaSizesFactory = {
    provide: FIND_PIZZA_SIZES_FACTORY,
    useFactory: (
        pizzaSizeRepository:PizzaSizeRepository
    ) : FindPizzaSizes => {
        return new BdFindPizzaSizes(
            pizzaSizeRepository
        )
    },
    inject: [ 
        PizzaSizeRepository
    ]
}