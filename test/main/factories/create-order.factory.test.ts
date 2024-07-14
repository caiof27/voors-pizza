import { CreateOrder } from "src/domain/usecases";
import { BuildCreateOrderController } from "src/main/factories/controllers";
import { CreateOrderController } from "src/presentation/controllers";

const makeCreateOrder = () =>{
    class CreateOrderStub implements CreateOrder {
        async create(): Promise<CreateOrder.Result>{
            return new Promise((resolve)=>resolve())
        }
    }
    return new CreateOrderStub()
}

export interface sutTypes {
    sut: CreateOrderController,
    findOrderStub: CreateOrder
}

const makeSut = (): sutTypes => {
    const findOrderStub = makeCreateOrder()
    const sut = new CreateOrderController(findOrderStub)
    return {
        sut,
        findOrderStub
    }
}

jest.mock('src/main/factories/controllers/create-order.factory.ts')

describe('BuildCreateOrderController', () => {
    test('Should build controller', () =>{
        const { findOrderStub } = makeSut()
        new BuildCreateOrderController(findOrderStub)
        expect(BuildCreateOrderController).toHaveBeenCalledWith(findOrderStub)
    })
})