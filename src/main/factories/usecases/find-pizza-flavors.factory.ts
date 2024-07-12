import { BdFindPizzaFlavors } from "src/data/usecases"
import { FindPizzaFlavors } from "src/domain/usecases"
import { PizzaFlavorRepository } from "src/infra/orm/repositories"
import { FIND_PIZZA_FLAVORS_FACTORY } from "src/main/factories/providers"

export const findPizzaFlavorsFactory = {
    provide: FIND_PIZZA_FLAVORS_FACTORY,
    useFactory: (
        pizzaFlavorRepository:PizzaFlavorRepository
    ) : FindPizzaFlavors => {
        return new BdFindPizzaFlavors(
            pizzaFlavorRepository
        )
    },
    inject: [ 
        PizzaFlavorRepository
    ]
}