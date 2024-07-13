import { BdFindOrder } from "src/data/usecases"
import { FindOrder } from "src/domain/usecases"
import { OrderRepository } from "src/infra/orm/repositories"
import { FIND_ORDER_FACTORY } from "src/main/factories/providers"

export const findOrderFactory = {
    provide: FIND_ORDER_FACTORY,
    useFactory: (
        orderRepository:OrderRepository
    ) : FindOrder => {
        return new BdFindOrder(
            orderRepository
        )
    },
    inject: [ 
        OrderRepository
    ]
}