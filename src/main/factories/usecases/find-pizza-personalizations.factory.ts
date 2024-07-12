import { BdFindPizzaPersonalizations } from "src/data/usecases"
import { FindPizzaPersonalizations } from "src/domain/usecases"
import { PizzaPersonalizationRepository } from "src/infra/orm/repositories"
import { FIND_PIZZA_PERSONALIZATIONS_FACTORY } from "src/main/factories/providers"

export const findPizzaPersonalizationsFactory = {
    provide: FIND_PIZZA_PERSONALIZATIONS_FACTORY,
    useFactory: (
        pizzaPersonalizationRepository:PizzaPersonalizationRepository
    ) : FindPizzaPersonalizations => {
        return new BdFindPizzaPersonalizations(
            pizzaPersonalizationRepository
        )
    },
    inject: [ 
        PizzaPersonalizationRepository
    ]
}