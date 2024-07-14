import { CreateOrder } from "src/domain/usecases";
import { CreateOrderController } from "src/presentation/controllers";
import { noContent, serverError } from "src/presentation/helpers";
import { createOrderMock} from "test/domain/mocks";

const findFlavorsMock = createOrderMock()

const makeCreateOrder = () =>{
    class findOrder implements CreateOrder {
        async create(): Promise<CreateOrder.Result>{
            return new Promise((resolve) => resolve())
        }
    }
    return new findOrder()
}

export interface sutTypes {
    sut: CreateOrderController,
    findOrderStub: CreateOrder
}

const makeSut = (): sutTypes =>{
    const findOrderStub = makeCreateOrder()
    const sut = new CreateOrderController(findOrderStub)
    return {
        sut,
        findOrderStub
    }
}

describe('CreateOrderController', ()=> {
    test('Should call findAll', async() =>{
        const { sut, findOrderStub } = makeSut()

        const spy = jest.spyOn(findOrderStub,'create')

        await sut.handle(findFlavorsMock)
        expect(spy).toHaveBeenCalled()
    })

    test('Should return 200',async() =>{
        const { sut } = makeSut();
        const httpResponse = await sut.handle(findFlavorsMock);
        expect(httpResponse).toEqual(noContent());
    })

    test('Should return 500',async() =>{
        const { sut, findOrderStub } = makeSut();
        jest.spyOn(findOrderStub, 'create').mockImplementationOnce(() => {
            throw new Error();
        });
        const httpResponse = await sut.handle(findFlavorsMock);
        expect(httpResponse).toEqual(serverError(new Error()));
    })
})