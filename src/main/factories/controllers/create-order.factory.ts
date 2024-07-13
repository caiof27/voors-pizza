import { Inject } from "@nestjs/common";
import { LogControllerDecorator } from "src/main/decorators";
import { Controller } from "src/presentation/protocols";
import { CREATE_ORDER_FACTORY } from "src/main/factories/providers";
import { CreateOrderController } from "src/presentation/controllers";
import { CreateOrder } from "src/domain/usecases";


export class BuildCreateOrderController {
    constructor(
        @Inject(CREATE_ORDER_FACTORY) private readonly createOrder: CreateOrder
    ){}

    public fabricate(): Controller {
        const controller = new CreateOrderController(
            this.createOrder
        )
        return new LogControllerDecorator(controller)
    }
}