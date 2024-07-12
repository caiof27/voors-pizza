import { FindPizzaFlavors } from "src/domain/usecases"
import { Controller, HttpResponse } from "src/presentation/protocols"
import { ok, serverError } from "src/presentation/helpers"

export class FindPizzaFlavorsController implements Controller {
    constructor(
        private readonly findPizzaFlavors: FindPizzaFlavors 
    ) {}

    async handle(): Promise<HttpResponse> {
        try {
            const data = await this.findPizzaFlavors.findAll()

            return ok(data)
        } 
        catch (error) {
            return serverError(error)
        }
    }
}

