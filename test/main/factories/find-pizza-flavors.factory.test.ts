import { FindPizzaFlavors } from "src/domain/usecases";
import { BuildFindPizzaFlavorsController } from "src/main/factories/controllers";
import { FindPizzaFlavorsController } from "src/presentation/controllers";

const makeFindPizzaFlavors = () =>{
    class FindPizzaFlavorsStub implements FindPizzaFlavors {
        async findAll(): Promise<FindPizzaFlavors.Result>{
            return new Promise((resolve)=>resolve([]))
        }
    }
    return new FindPizzaFlavorsStub()
}

export interface sutTypes {
    sut: FindPizzaFlavorsController,
    findPizzaFlavorsStub: FindPizzaFlavors
}

const makeSut = (): sutTypes => {
    const findPizzaFlavorsStub = makeFindPizzaFlavors()
    const sut = new FindPizzaFlavorsController(findPizzaFlavorsStub)
    return {
        sut,
        findPizzaFlavorsStub
    }
}

jest.mock('src/main/factories/controllers/find-pizza-flavors.factory.ts')

describe('BuildFindFlavorsController', () => {
    test('Should build controller', () =>{
        const { findPizzaFlavorsStub } = makeSut()
        new BuildFindPizzaFlavorsController(findPizzaFlavorsStub)
        expect(BuildFindPizzaFlavorsController).toHaveBeenCalledWith(findPizzaFlavorsStub)
    })
})