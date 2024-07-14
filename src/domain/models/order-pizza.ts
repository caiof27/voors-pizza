import { 
    OrderModel,
    OrderPizzaPersonalizationModel,
    PizzaFlavorModel,
    PizzaSizeModel
} from "./"

export interface OrderPizzaModel {
    id: number
    orderId: number
    pizzaFlavorId: number
    pizzaSizeId: number

    order?: OrderModel
    pizzaFlavor?: PizzaFlavorModel
    pizzaSize?: PizzaSizeModel

    personalization?: OrderPizzaPersonalizationModel[]

    totalPrize?: number
    totalTime?: number
    flavorName?: string
    sizeName?: string
}