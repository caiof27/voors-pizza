import { Body, Controller, Get, Param, Post, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { 
    BuildFindPizzaFlavorsController,
    BuildFindPizzaPersonalizationsController,
    BuildFindPizzaSizesController,
    BuildCreateOrderController,
    BuildFindOrderController
} from "src/main/factories/controllers";
import { HttpResponse } from "src/presentation/protocols";
import { controllerAdapter } from "src/main/adapters";
import { CreateOrderDto } from "./dto";

@Controller('')
export class MainController {
    constructor(
        private readonly buildFindPizzaSizesController: BuildFindPizzaSizesController,
        private readonly buildFindPizzaFlavorsController: BuildFindPizzaFlavorsController,
        private readonly buildFindPizzaPersonalizationsController: BuildFindPizzaPersonalizationsController,
        private readonly buildCreateOrderController: BuildCreateOrderController,
        private readonly buildFindOrderController: BuildFindOrderController
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

    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    @Post('order')
    async createOrder(
    @Res() res,
    @Body() body: CreateOrderDto
    ): Promise<HttpResponse>{
        const resultado = await controllerAdapter(this.buildCreateOrderController.fabricate(), body)
        return res.status(resultado.statusCode).json(resultado)
    }

    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    @Get('order/:id')
    async findOrder(
    @Res() res,
    @Param('id') id: number
    ): Promise<HttpResponse>{
        const resultado = await controllerAdapter(this.buildFindOrderController.fabricate(), { id })
        return res.status(resultado.statusCode).json(resultado)
    }

}
    