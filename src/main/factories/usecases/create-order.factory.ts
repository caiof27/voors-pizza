import { BdCreateOrder } from "src/data/usecases"
import { CreateOrder } from "src/domain/usecases"
import { 
    OrderRepository,
    OrderPizzaRepository,
    OrderPizzaPersonalizationRepository
} from "src/infra/orm/repositories"
import { CREATE_ORDER_FACTORY } from "src/main/factories/providers"

export const createOrderFactory = {
    provide: CREATE_ORDER_FACTORY,
    useFactory: (
        orderRepository: OrderRepository,
        orderPizzaRepository: OrderPizzaRepository,
        orderPizzaPersonalization: OrderPizzaPersonalizationRepository
    ) : CreateOrder => {
        return new BdCreateOrder(
            orderRepository,
            orderPizzaRepository,
            orderPizzaPersonalization
        )
    },
    inject: [ 
        OrderRepository,
        OrderPizzaRepository,
        OrderPizzaPersonalizationRepository
    ]
}