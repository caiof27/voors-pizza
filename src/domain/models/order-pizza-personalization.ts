import { 
    OrderPizzaModel,
    PizzaPersonalizationModel 
} from "./"

export interface OrderPizzaPersonalizationModel {
    id: number
    orderPizzaId: number
    pizzaPersonalizationId: number

    orderPizza: OrderPizzaModel
    pizzaPersonalization: PizzaPersonalizationModel

    personalizationName: string
}