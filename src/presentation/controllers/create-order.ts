import { CreateOrder } from "src/domain/usecases"
import { Controller, HttpResponse } from "src/presentation/protocols"
import { noContent,  serverError } from "src/presentation/helpers"

export class CreateOrderController implements Controller {
    constructor(
        private readonly createOrder: CreateOrder 
    ) {}

    async handle(params:CreateOrderController.Params): Promise<HttpResponse> {
        try {
            await this.createOrder.create(params)

            return noContent()
        } 
        catch (error) {
            return serverError(error)
        }
    }
}

export namespace CreateOrderController {
    export type Params = CreateOrder.Params
}

