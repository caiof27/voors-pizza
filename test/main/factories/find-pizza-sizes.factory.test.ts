import { FindPizzaSizes } from "src/domain/usecases";
import { BuildFindPizzaSizesController } from "src/main/factories/controllers";
import { FindPizzaSizesController } from "src/presentation/controllers";

const makeFindPizzaSizes = () =>{
    class FindPizzaSizesStub implements FindPizzaSizes {
        async findAll(): Promise<FindPizzaSizes.Result>{
            return new Promise((resolve)=>resolve([]))
        }
    }
    return new FindPizzaSizesStub()
}

export interface sutTypes {
    sut: FindPizzaSizesController,
    findPizzaSizesStub: FindPizzaSizes
}

const makeSut = (): sutTypes => {
    const findPizzaSizesStub = makeFindPizzaSizes()
    const sut = new FindPizzaSizesController(findPizzaSizesStub)
    return {
        sut,
        findPizzaSizesStub
    }
}

jest.mock('src/main/factories/controllers/find-pizza-sizes.factory.ts')

describe('BuildFindSizesController', () => {
    test('Should build controller', () =>{
        const { findPizzaSizesStub } = makeSut()
        new BuildFindPizzaSizesController(findPizzaSizesStub)
        expect(BuildFindPizzaSizesController).toHaveBeenCalledWith(findPizzaSizesStub)
    })
})