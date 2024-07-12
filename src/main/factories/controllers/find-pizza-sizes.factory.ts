import { Inject } from "@nestjs/common";
import { LogControllerDecorator } from "src/main/decorators";
import { Controller } from "src/presentation/protocols";
import { FIND_PIZZA_SIZES_FACTORY } from "src/main/factories/providers";
import { FindPizzaSizesController } from "src/presentation/controllers";
import { FindPizzaSizes } from "src/domain/usecases";


export class BuildFindPizzaSizesController {
    constructor(
        @Inject(FIND_PIZZA_SIZES_FACTORY) private readonly findPizzaSizes: FindPizzaSizes
    ){}

    public fabricate(): Controller {
        const controller = new FindPizzaSizesController(
            this.findPizzaSizes
        )
        return new LogControllerDecorator(controller)
    }
}