import { FindPizzaPersonalizations } from "src/domain/usecases"
import { Controller, HttpResponse } from "src/presentation/protocols"
import { ok, serverError } from "src/presentation/helpers"

export class FindPizzaPersonalizationsController implements Controller {
    constructor(
        private readonly findPizzaPersonalizations: FindPizzaPersonalizations 
    ) {}

    async handle(): Promise<HttpResponse> {
        try {
            const data = await this.findPizzaPersonalizations.findAll()

            return ok(data)
        } 
        catch (error) {
            return serverError(error)
        }
    }
}

