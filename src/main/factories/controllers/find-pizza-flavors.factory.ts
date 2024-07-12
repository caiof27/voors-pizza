import { Inject } from "@nestjs/common";
import { LogControllerDecorator } from "src/main/decorators";
import { Controller } from "src/presentation/protocols";
import { FIND_PIZZA_FLAVORS_FACTORY } from "src/main/factories/providers";
import { FindPizzaFlavorsController } from "src/presentation/controllers";
import { FindPizzaFlavors } from "src/domain/usecases";


export class BuildFindPizzaFlavorsController {
    constructor(
        @Inject(FIND_PIZZA_FLAVORS_FACTORY) private readonly findPizzaFlavors: FindPizzaFlavors
    ){}

    public fabricate(): Controller {
        const controller = new FindPizzaFlavorsController(
            this.findPizzaFlavors
        )
        return new LogControllerDecorator(controller)
    }
}