import { Inject } from "@nestjs/common";
import { LogControllerDecorator } from "src/main/decorators";
import { Controller } from "src/presentation/protocols";
import { FIND_PIZZA_PERSONALIZATIONS_FACTORY } from "src/main/factories/providers";
import { FindPizzaPersonalizationsController } from "src/presentation/controllers";
import { FindPizzaPersonalizations } from "src/domain/usecases";


export class BuildFindPizzaPersonalizationsController {
    constructor(
        @Inject(FIND_PIZZA_PERSONALIZATIONS_FACTORY) private readonly findPizzaPersonalizations: FindPizzaPersonalizations
    ){}

    public fabricate(): Controller {
        const controller = new FindPizzaPersonalizationsController(
            this.findPizzaPersonalizations
        )
        return new LogControllerDecorator(controller)
    }
}