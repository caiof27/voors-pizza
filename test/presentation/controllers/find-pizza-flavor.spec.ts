import { FindPizzaFlavors } from "src/domain/usecases";
import { FindPizzaFlavorsController } from "src/presentation/controllers";
import { ok, serverError } from "src/presentation/helpers";
import { pizzaFlavorMock } from "test/data/usecases/find-pizza-flavors.spec";

const findFlavorsMock = pizzaFlavorMock()

const makeFindPizzaFlavors = () =>{
    class findPizzaFlavors implements FindPizzaFlavors {
        async findAll(): Promise<FindPizzaFlavors.Result>{
            return new Promise((resolve) => resolve(findFlavorsMock))
        }
    }
    return new findPizzaFlavors()
}

export interface sutTypes {
    sut: FindPizzaFlavorsController,
    findPizzaFlavorsStub: FindPizzaFlavors
}

const makeSut = (): sutTypes =>{
    const findPizzaFlavorsStub = makeFindPizzaFlavors()
    const sut = new FindPizzaFlavorsController(findPizzaFlavorsStub)
    return {
        sut,
        findPizzaFlavorsStub
    }
}

describe('FindPizzaFlavorsController', ()=> {
    test('Should call findAll', async() =>{
        const { sut, findPizzaFlavorsStub } = makeSut()

        const spy = jest.spyOn(findPizzaFlavorsStub,'findAll')

        await sut.handle()
        expect(spy).toHaveBeenCalled()
    })

    test('Should return 200',async() =>{
        const { sut } = makeSut();
        const httpResponse = await sut.handle();
        expect(httpResponse).toEqual(ok(findFlavorsMock));
    })

    test('Should return 500',async() =>{
        const { sut, findPizzaFlavorsStub } = makeSut();
        jest.spyOn(findPizzaFlavorsStub, 'findAll').mockImplementationOnce(() => {
            throw new Error();
        });
        const httpResponse = await sut.handle();
        expect(httpResponse).toEqual(serverError(new Error()));
    })
})