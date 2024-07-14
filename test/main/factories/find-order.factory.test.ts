import { FindOrder } from "src/domain/usecases";
import { BuildFindOrderController } from "src/main/factories/controllers";
import { FindOrderController } from "src/presentation/controllers";
import { findOrderMock } from "test/domain/mocks";

const makeFindOrder = () =>{
    class FindOrderStub implements FindOrder {
        async findOne(): Promise<FindOrder.Result>{
            return new Promise((resolve)=>resolve(findOrderMock()))
        }
    }
    return new FindOrderStub()
}

export interface sutTypes {
    sut: FindOrderController,
    findOrderStub: FindOrder
}

const makeSut = (): sutTypes => {
    const findOrderStub = makeFindOrder()
    const sut = new FindOrderController(findOrderStub)
    return {
        sut,
        findOrderStub
    }
}

jest.mock('src/main/factories/controllers/find-order.factory.ts')

describe('BuildFindOrderController', () => {
    test('Should build controller', () =>{
        const { findOrderStub } = makeSut()
        new BuildFindOrderController(findOrderStub)
        expect(BuildFindOrderController).toHaveBeenCalledWith(findOrderStub)
    })
})