import { FindPizzaFlavorsRepository } from "src/data/protocols";
import { PizzaFlavorModel } from "src/domain/models";
import { BdFindPizzaFlavors } from "src/data/usecases";

export const pizzaFlavorMock = (): PizzaFlavorModel[] => [
    {
        id: 1,
        flavor: 'Calabresa',
        additionalTime: 0
    },
    {
        id: 2,
        flavor: 'Marguerita',
        additionalTime: 0
    },
    {
        id: 3,
        flavor: 'Portuguesa',
        additionalTime: 5
    }
]

const fakePizzaFlavors = pizzaFlavorMock()

const makeFindPizzaFlavorsRepository = (): FindPizzaFlavorsRepository =>{
    class FindPizzaFlavorsRepositoryStub implements FindPizzaFlavorsRepository {
        async findAll(): Promise<FindPizzaFlavorsRepository.Result>{
            return new Promise((resolve) => resolve(fakePizzaFlavors))
        }
    }
    return new FindPizzaFlavorsRepositoryStub();
}

export interface SutTypes {
    sut: BdFindPizzaFlavors,
    findPizzaFlavorsRepositoryStub: FindPizzaFlavorsRepository
}

const makeSut = (): SutTypes =>{
    const findPizzaFlavorsRepositoryStub = makeFindPizzaFlavorsRepository()
    const sut = new BdFindPizzaFlavors(findPizzaFlavorsRepositoryStub)

    return {
        sut,
        findPizzaFlavorsRepositoryStub
    }
}

describe('FindPizzaFlavors UseCase' , ()=>{

    test('Should call findPizzaFlavorsRepository', async () => {
        const { sut, findPizzaFlavorsRepositoryStub } = makeSut()

        const spy = jest.spyOn(findPizzaFlavorsRepositoryStub,'findAll')

        await sut.findAll()

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
    })

    test('Should throw if findPizzaFlavorsRepository throws', async()=>{
        const { sut, findPizzaFlavorsRepositoryStub } = makeSut()

        jest.spyOn(findPizzaFlavorsRepositoryStub,'findAll').mockReturnValueOnce(
            new Promise((_,reject)=>reject(new Error()))
        )

        const promise = sut.findAll();
        await expect(promise).rejects.toThrow();

    })

    test('Should return flavors on success', async () => {
        const { sut } = makeSut();
    
        const account = await sut.findAll();
        expect(account).toEqual(fakePizzaFlavors);
      });
})