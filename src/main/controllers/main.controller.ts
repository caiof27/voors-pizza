import { Controller, Get, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { 
    BuildFindPizzaFlavorsController,
    BuildFindPizzaPersonalizationsController,
    BuildFindPizzaSizesController 
} from "src/main/factories/controllers";
import { HttpResponse } from "src/presentation/protocols";
import { controllerAdapter } from "src/main/adapters";

@Controller('')
export class MainController {
    constructor(
        private readonly buildFindPizzaSizesController: BuildFindPizzaSizesController,
        private readonly buildFindPizzaFlavorsController: BuildFindPizzaFlavorsController,
        private readonly buildFindPizzaPersonalizationsController: BuildFindPizzaPersonalizationsController,
    ) {}

    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    @Get('size')
    async findPizzaSizes(
    @Res() res
    ): Promise<HttpResponse>{
        const resultado = await controllerAdapter(this.buildFindPizzaSizesController.fabricate())
        return res.status(resultado.statusCode).json(resultado)
    }

    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    @Get('flavor')
    async findPizzaFlavors(
    @Res() res
    ): Promise<HttpResponse>{
        const resultado = await controllerAdapter(this.buildFindPizzaFlavorsController.fabricate())
        return res.status(resultado.statusCode).json(resultado)
    }

    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    @Get('personalization')
    async findPizzaPersonalizations(
    @Res() res
    ): Promise<HttpResponse>{
        const resultado = await controllerAdapter(this.buildFindPizzaPersonalizationsController.fabricate())
        return res.status(resultado.statusCode).json(resultado)
    }

}
    