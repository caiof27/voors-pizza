import { FindPizzaSizes } from "src/domain/usecases";
import { FindPizzaSizesController } from "src/presentation/controllers";
import { ok, serverError } from "src/presentation/helpers";
import { pizzaSizesMock } from "test/data/usecases/find-pizza-sizes.spec";

const findSizesMock = pizzaSizesMock()

const makeFindPizzaSizes = () =>{
    class findPizzaSizes implements FindPizzaSizes {
        async findAll(): Promise<FindPizzaSizes.Result>{
            return new Promise((resolve) => resolve(findSizesMock))
        }
    }
    return new findPizzaSizes()
}

export interface sutTypes {
    sut: FindPizzaSizesController,
    findPizzaSizesStub: FindPizzaSizes
}

const makeSut = (): sutTypes =>{
    const findPizzaSizesStub = makeFindPizzaSizes()
    const sut = new FindPizzaSizesController(findPizzaSizesStub)
    return {
        sut,
        findPizzaSizesStub
    }
}

describe('FindPizzaSizesController', ()=> {
    test('Should call findAll', async() =>{
        const { sut, findPizzaSizesStub } = makeSut()

        const spy = jest.spyOn(findPizzaSizesStub,'findAll')

        await sut.handle()
        expect(spy).toHaveBeenCalled()
    })

    test('Should return 200',async() =>{
        const { sut } = makeSut();
        const httpResponse = await sut.handle();
        expect(httpResponse).toEqual(ok(findSizesMock));
    })

    test('Should return 500',async() =>{
        const { sut, findPizzaSizesStub } = makeSut();
        jest.spyOn(findPizzaSizesStub, 'findAll').mockImplementationOnce(() => {
            throw new Error();
        });
        const httpResponse = await sut.handle();
        expect(httpResponse).toEqual(serverError(new Error()));
    })
})