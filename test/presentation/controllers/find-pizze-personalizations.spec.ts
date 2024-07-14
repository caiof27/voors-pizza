import { FindPizzaPersonalizations } from "src/domain/usecases";
import { FindPizzaPersonalizationsController } from "src/presentation/controllers";
import { ok, serverError } from "src/presentation/helpers";
import { pizzaPersonalizationsMock } from "test/data/usecases/find-pizza-personalization.spec";

const findPersonalizationsMock = pizzaPersonalizationsMock()

const makeFindPizzaPersonalizations = () =>{
    class findPizzaPersonalizations implements FindPizzaPersonalizations {
        async findAll(): Promise<FindPizzaPersonalizations.Result>{
            return new Promise((resolve) => resolve(findPersonalizationsMock))
        }
    }
    return new findPizzaPersonalizations()
}

export interface sutTypes {
    sut: FindPizzaPersonalizationsController,
    findPizzaPersonalizationsStub: FindPizzaPersonalizations
}

const makeSut = (): sutTypes =>{
    const findPizzaPersonalizationsStub = makeFindPizzaPersonalizations()
    const sut = new FindPizzaPersonalizationsController(findPizzaPersonalizationsStub)
    return {
        sut,
        findPizzaPersonalizationsStub
    }
}

describe('FindPizzaPersonalizationsController', ()=> {
    test('Should call findAll', async() =>{
        const { sut, findPizzaPersonalizationsStub } = makeSut()

        const spy = jest.spyOn(findPizzaPersonalizationsStub,'findAll')

        await sut.handle()
        expect(spy).toHaveBeenCalled()
    })

    test('Should return 200',async() =>{
        const { sut } = makeSut();
        const httpResponse = await sut.handle();
        expect(httpResponse).toEqual(ok(findPersonalizationsMock));
    })

    test('Should return 500',async() =>{
        const { sut, findPizzaPersonalizationsStub } = makeSut();
        jest.spyOn(findPizzaPersonalizationsStub, 'findAll').mockImplementationOnce(() => {
            throw new Error();
        });
        const httpResponse = await sut.handle();
        expect(httpResponse).toEqual(serverError(new Error()));
    })
})