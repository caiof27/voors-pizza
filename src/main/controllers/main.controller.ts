import { Controller, Get, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { 
    BuildFindPizzaSizesController 
} from "src/main/factories/controllers";
import { HttpResponse } from "src/presentation/protocols";
import { controllerAdapter } from "src/main/adapters";

@Controller('')
export class MainController {
    constructor(
        private readonly buildFindPizzaSizesController: BuildFindPizzaSizesController
    ) {}

    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    @Get('pizza-size')
    async findPizzaSizes(
    @Res() res
    ): Promise<HttpResponse>{
    const resultado = await controllerAdapter(this.buildFindPizzaSizesController.fabricate())
    return res.status(resultado.statusCode).json(resultado)
    }

}
    