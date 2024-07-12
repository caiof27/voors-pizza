import { FindPizzaSizes } from "src/domain/usecases"
import { Controller, HttpResponse } from "src/presentation/protocols"
import { ok, serverError } from "src/presentation/helpers"

export class FindPizzaSizesController implements Controller {
    constructor(
        private readonly findPizzaSizes: FindPizzaSizes 
    ) {}

    async handle(): Promise<HttpResponse> {
        try {
            const data = await this.findPizzaSizes.findAll()

            return ok(data)
        } 
        catch (error) {
            return serverError(error)
        }
    }
}

