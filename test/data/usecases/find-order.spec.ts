import { FindOrderRepository } from "src/data/protocols";
import { BdFindOrder } from "src/data/usecases";
import { findOrderMock } from "test/domain/mocks";


const fakePizzaFlavors = findOrderMock()

const makeFindPizzaFlavorsRepository = (): FindOrderRepository =>{
    class FindPizzaFlavorsRepositoryStub implements FindOrderRepository {
        async findOne(): Promise<FindOrderRepository.Result>{
            return new Promise((resolve) => resolve(fakePizzaFlavors))
        }
    }
    return new FindPizzaFlavorsRepositoryStub();
}

export interface SutTypes {
    sut: BdFindOrder,
    findPizzaOrderRepositoryStub: FindOrderRepository
}

const makeSut = (): SutTypes =>{
    const findPizzaOrderRepositoryStub = makeFindPizzaFlavorsRepository()
    const sut = new BdFindOrder(findPizzaOrderRepositoryStub)

    return {
        sut,
        findPizzaOrderRepositoryStub
    }
}

describe('FindPizzaPersonalizations UseCase' , ()=>{

    test('Should call findPizzaPersonalizationsRepository', async () => {
        const { sut, findPizzaOrderRepositoryStub } = makeSut()

        const spy = jest.spyOn(findPizzaOrderRepositoryStub,'findOne')

        await sut.findOne({id:1})

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
    })

    test('Should throw if findPizzaSizesRepository throws', async()=>{
        const { sut, findPizzaOrderRepositoryStub } = makeSut()

        jest.spyOn(findPizzaOrderRepositoryStub,'findOne').mockReturnValueOnce(
            new Promise((_,reject)=>reject(new Error()))
        )

        const promise = sut.findOne({id:1});
        await expect(promise).rejects.toThrow();

    })

    test('Should return sizes on success', async () => {
        const { sut } = makeSut();
    
        const account = await sut.findOne({id:1});
        expect(account).toEqual(fakePizzaFlavors);
      });
})