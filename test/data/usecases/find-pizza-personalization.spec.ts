import { FindPizzaPersonalizationsRepository } from "src/data/protocols";
import { PizzaPersonalizationModel } from "src/domain/models";
import { BdFindPizzaPersonalizations } from "src/data/usecases";

export const pizzaPersonalizationsMock = (): PizzaPersonalizationModel[] => [
    {
        id: 1,
        personalization: 'Extra Bacon',
        additionalPrize: 3,
        additionalTime: 0
    },
    {
        id: 2,
        personalization: 'Sem Cebola',
        additionalPrize: 0,
        additionalTime: 0
    },
    {
        id: 3,
        personalization: 'Borda Recheada',
        additionalPrize: 5,
        additionalTime: 5
    }
]

const fakePizzaPersonalizations = pizzaPersonalizationsMock()

const makeFindPizzaPersonalizationsRepository = (): FindPizzaPersonalizationsRepository =>{
    class FindPizzaPersonalizationsRepositoryStub implements FindPizzaPersonalizationsRepository {
        async findAll(): Promise<FindPizzaPersonalizationsRepository.Result>{
            return new Promise((resolve) => resolve(fakePizzaPersonalizations))
        }
    }
    return new FindPizzaPersonalizationsRepositoryStub();
}

export interface SutTypes {
    sut: BdFindPizzaPersonalizations,
    findPizzaPersonalizationsRepositoryStub: FindPizzaPersonalizationsRepository
}

const makeSut = (): SutTypes =>{
    const findPizzaPersonalizationsRepositoryStub = makeFindPizzaPersonalizationsRepository()
    const sut = new BdFindPizzaPersonalizations(findPizzaPersonalizationsRepositoryStub)

    return {
        sut,
        findPizzaPersonalizationsRepositoryStub
    }
}

describe('FindPizzaPersonalizations UseCase' , ()=>{

    test('Should call findPizzaPersonalizationsRepository', async () => {
        const { sut, findPizzaPersonalizationsRepositoryStub } = makeSut()

        const spy = jest.spyOn(findPizzaPersonalizationsRepositoryStub,'findAll')

        await sut.findAll()

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
    })

    test('Should throw if findPizzaPersonalizationsRepository throws', async()=>{
        const { sut, findPizzaPersonalizationsRepositoryStub } = makeSut()

        jest.spyOn(findPizzaPersonalizationsRepositoryStub,'findAll').mockReturnValueOnce(
            new Promise((_,reject)=>reject(new Error()))
        )

        const promise = sut.findAll();
        await expect(promise).rejects.toThrow();

    })

    test('Should return personalizations on success', async () => {
        const { sut } = makeSut();
    
        const account = await sut.findAll();
        expect(account).toEqual(fakePizzaPersonalizations);
      });
})