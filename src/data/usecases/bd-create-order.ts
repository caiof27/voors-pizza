import { CreateOrder } from "src/domain/usecases"
import { 
    CreateOrderPizzaPersonalizationRepository, 
    CreateOrderPizzaRepository, 
    CreateOrderRepository 
} from "src/data/protocols"

export class BdCreateOrder implements CreateOrder {
    constructor(
        private readonly orderRepository: CreateOrderRepository,
        private readonly orderPizzaRepository: CreateOrderPizzaRepository,
        private readonly orderPizzaPersonalizationRepository: CreateOrderPizzaPersonalizationRepository
    ){}

    async create(params:CreateOrder.Params) : Promise<void> {
        const { pizzas } = params
        const { id:orderId } = await this.orderRepository.create()
        for(const pizza of pizzas){
            const { flavorId: pizzaFlavorId, sizeId: pizzaSizeId, personalization } = pizza 
            const { id:orderPizzaId } = await this.orderPizzaRepository.create({ pizzaFlavorId, pizzaSizeId, orderId })
            if(personalization){
                await this.orderPizzaPersonalizationRepository.create({ personalization, orderPizzaId })
            }
        }
        
        
    }
}
