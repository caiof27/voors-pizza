import { FindPizzaPersonalizations } from "src/domain/usecases";
import { BuildFindPizzaPersonalizationsController } from "src/main/factories/controllers";
import { FindPizzaPersonalizationsController } from "src/presentation/controllers";

const makeFindPizzaPersonalizations = () =>{
    class FindPizzaPersonalizationsStub implements FindPizzaPersonalizations {
        async findAll(): Promise<FindPizzaPersonalizations.Result>{
            return new Promise((resolve)=>resolve([]))
        }
    }
    return new FindPizzaPersonalizationsStub()
}

export interface sutTypes {
    sut: FindPizzaPersonalizationsController,
    findPizzaPersonalizationsStub: FindPizzaPersonalizations
}

const makeSut = (): sutTypes => {
    const findPizzaPersonalizationsStub = makeFindPizzaPersonalizations()
    const sut = new FindPizzaPersonalizationsController(findPizzaPersonalizationsStub)
    return {
        sut,
        findPizzaPersonalizationsStub
    }
}

jest.mock('src/main/factories/controllers/find-pizza-personalizations.factory.ts')

describe('BuildFindPersonalizationsController', () => {
    test('Should build controller', () =>{
        const { findPizzaPersonalizationsStub } = makeSut()
        new BuildFindPizzaPersonalizationsController(findPizzaPersonalizationsStub)
        expect(BuildFindPizzaPersonalizationsController).toHaveBeenCalledWith(findPizzaPersonalizationsStub)
    })
})