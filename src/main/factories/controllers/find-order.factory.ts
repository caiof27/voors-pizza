import { Inject } from "@nestjs/common";
import { LogControllerDecorator } from "src/main/decorators";
import { Controller } from "src/presentation/protocols";
import { FIND_ORDER_FACTORY } from "src/main/factories/providers";
import { FindOrderController } from "src/presentation/controllers";
import { FindOrder } from "src/domain/usecases";


export class BuildFindOrderController {
    constructor(
        @Inject(FIND_ORDER_FACTORY) private readonly findOrder: FindOrder
    ){}

    public fabricate(): Controller {
        const controller = new FindOrderController(
            this.findOrder
        )
        return new LogControllerDecorator(controller)
    }
}