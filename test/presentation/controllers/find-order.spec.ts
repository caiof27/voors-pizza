import { FindOrder } from "src/domain/usecases";
import { FindOrderController } from "src/presentation/controllers";
import { ok, serverError } from "src/presentation/helpers";
import { findOrderMock } from "test/domain/mocks";

const findFlavorsMock = findOrderMock()

const makeFindOrder = () =>{
    class findOrder implements FindOrder {
        async findOne(): Promise<FindOrder.Result>{
            return new Promise((resolve) => resolve(findFlavorsMock))
        }
    }
    return new findOrder()
}

export interface sutTypes {
    sut: FindOrderController,
    findOrderStub: FindOrder
}

const makeSut = (): sutTypes =>{
    const findOrderStub = makeFindOrder()
    const sut = new FindOrderController(findOrderStub)
    return {
        sut,
        findOrderStub
    }
}

describe('FindOrderController', ()=> {
    test('Should call findAll', async() =>{
        const { sut, findOrderStub } = makeSut()

        const spy = jest.spyOn(findOrderStub,'findOne')

        await sut.handle({id:1})
        expect(spy).toHaveBeenCalled()
    })

    test('Should return 200',async() =>{
        const { sut } = makeSut();
        const httpResponse = await sut.handle({id:1});
        expect(httpResponse).toEqual(ok(findFlavorsMock));
    })

    test('Should return 500',async() =>{
        const { sut, findOrderStub } = makeSut();
        jest.spyOn(findOrderStub, 'findOne').mockImplementationOnce(() => {
            throw new Error();
        });
        const httpResponse = await sut.handle({id:1});
        expect(httpResponse).toEqual(serverError(new Error()));
    })
})