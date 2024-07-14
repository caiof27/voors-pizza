import { FindPizzaSizesRepository } from "src/data/protocols";
import { PizzaSizeModel } from "src/domain/models";
import { BdFindPizzaSizes } from "src/data/usecases";

export const pizzaSizesMock = (): PizzaSizeModel[] => [
    {
        id: 1,
        size: "Pequena",
        prize: 20.20,
        cookingTime: 15
    },
    {
        id: 2,
        size: "Média",
        prize: 30.30,
        cookingTime: 20
    },
    {
        id: 3,
        size: "Grande",
        prize: 40.00,
        cookingTime: 25
    }
]

const fakePizzaSizes = pizzaSizesMock()

const makeFindPizzaSizesRepository = (): FindPizzaSizesRepository =>{
    class FindPizzaSizesRepositoryStub implements FindPizzaSizesRepository {
        async findAll(): Promise<FindPizzaSizesRepository.Result>{
            return new Promise((resolve) => resolve(fakePizzaSizes))
        }
    }
    return new FindPizzaSizesRepositoryStub();
}

export interface SutTypes {
    sut: BdFindPizzaSizes,
    findPizzaSizesRepositoryStub: FindPizzaSizesRepository
}

const makeSut = (): SutTypes =>{
    const findPizzaSizesRepositoryStub = makeFindPizzaSizesRepository()
    const sut = new BdFindPizzaSizes(findPizzaSizesRepositoryStub)

    return {
        sut,
        findPizzaSizesRepositoryStub
    }
}

describe('FindPizzaSizes UseCase' , ()=>{

    test('Should call findPizzaSizesRepository', async () => {
        const { sut, findPizzaSizesRepositoryStub } = makeSut()

        const spy = jest.spyOn(findPizzaSizesRepositoryStub,'findAll')

        await sut.findAll()

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
    })

    test('Should throw if findPizzaSizesRepository throws', async()=>{
        const { sut, findPizzaSizesRepositoryStub } = makeSut()

        jest.spyOn(findPizzaSizesRepositoryStub,'findAll').mockReturnValueOnce(
            new Promise((_,reject)=>reject(new Error()))
        )

        const promise = sut.findAll();
        await expect(promise).rejects.toThrow();

    })

    test('Should return sizes on success', async () => {
        const { sut } = makeSut();
    
        const account = await sut.findAll();
        expect(account).toEqual(fakePizzaSizes);
      });
})