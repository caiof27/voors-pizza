import { FindOrder } from "src/domain/usecases"
import { Controller, HttpResponse } from "src/presentation/protocols"
import { ok, serverError } from "src/presentation/helpers"

export class FindOrderController implements Controller {
    constructor(
        private readonly findOrder: FindOrder 
    ) {}

    async handle(params:FindOrderController.Params): Promise<HttpResponse> {
        try {
            const data = await this.findOrder.findOne(params)

            return ok(data)
        } 
        catch (error) {
            return serverError(error)
        }
    }
}

export namespace FindOrderController {
    export type Params = FindOrder.Params
}

