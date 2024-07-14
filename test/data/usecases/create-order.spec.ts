import { 
    CreateOrderRepository, 
    CreateOrderPizzaRepository,
    CreateOrderPizzaPersonalizationRepository 
} from "src/data/protocols";
import { BdCreateOrder } from "src/data/usecases";
import { 
    OrderModel, 
    OrderPizzaModel, 
} from "src/domain/models";
import { 
    createOrderMock,
    createOrderMockWithInvalidFlavor,
    createOrderMockWithInvalidPersonalization,
    createOrderMockWithInvalidSize,
    createOrderMockWithoutPersonalization
} from "test/domain/mocks";

export const orderMock = (): OrderModel => {
    return { 
        id: 1,
        createdAt: new Date()
    }
}


const fakeOrderMock = orderMock()

const makeCreateOrderRepository = (): CreateOrderRepository =>{
    class CreateOrderRepositoryStub implements CreateOrderRepository {
        async create(): Promise<CreateOrderRepository.Result>{
            return new Promise((resolve) => resolve(fakeOrderMock))
        }
    }
    return new CreateOrderRepositoryStub();
}

export const orderPizzaMock = (): OrderPizzaModel => {
    return { 
        id: 1,
        orderId: 1,
        pizzaFlavorId: 1,
        pizzaSizeId: 1
    }
}


const fakeOrderPizzaMock = orderPizzaMock()

const makeCreateOrderPizzaRepository = (): CreateOrderPizzaRepository =>{
    class CreateOrderPizzaRepositoryStub implements CreateOrderPizzaRepository {
        async create(): Promise<CreateOrderPizzaRepository.Result>{
            return new Promise((resolve) => resolve(fakeOrderPizzaMock))
        }
    }
    return new CreateOrderPizzaRepositoryStub();
}



const makeCreateOrderPizzaPersonalizationRepository = (): CreateOrderPizzaPersonalizationRepository =>{
    class CreateOrderPizzaPersonalizationRepositoryStub implements CreateOrderPizzaPersonalizationRepository {
        async create(): Promise<CreateOrderPizzaPersonalizationRepository.Result>{
            return new Promise((resolve) => resolve())
        }
    }
    return new CreateOrderPizzaPersonalizationRepositoryStub();
}

export interface SutTypes {
    sut: BdCreateOrder,
    createOrderRepositoryStub: CreateOrderRepository,
    createOrderPizzaRepositoryStub: CreateOrderPizzaRepository,
    createOrderPizzaPersonalizationStub: CreateOrderPizzaPersonalizationRepository
}

const makeSut = (): SutTypes =>{
    const createOrderRepositoryStub = makeCreateOrderRepository()
    const createOrderPizzaRepositoryStub = makeCreateOrderPizzaRepository()
    const createOrderPizzaPersonalizationStub = makeCreateOrderPizzaPersonalizationRepository()
    const sut = new BdCreateOrder(createOrderRepositoryStub,createOrderPizzaRepositoryStub,createOrderPizzaPersonalizationStub)

    return {
        sut,
        createOrderRepositoryStub,
        createOrderPizzaRepositoryStub,
        createOrderPizzaPersonalizationStub
    }
}

describe('Create Order', ()=>{
    test('Should call createOrderRepository', async () =>{
        const { sut, createOrderRepositoryStub } = makeSut()
        const spy = jest.spyOn(createOrderRepositoryStub,'create')
        await sut.create(createOrderMock())

        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledTimes(1)
    })

    test('Should call createOrderPizzaRepository', async () =>{
        const { sut, createOrderPizzaRepositoryStub } = makeSut()
        const spy = jest.spyOn(createOrderPizzaRepositoryStub,'create')
        await sut.create(createOrderMock())

        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledTimes(2)
    })

    test('Should call createOrderPizzaPersonalizationRepository', async () =>{
        const { sut, createOrderPizzaPersonalizationStub } = makeSut()
        const spy = jest.spyOn(createOrderPizzaPersonalizationStub,'create')
        await sut.create(createOrderMock())

        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledTimes(2)
    })

    test('Should fail CreateOrder when called with Invalid Flavor', async() =>{
        try{
            const { sut } = makeSut()
            await sut.create(createOrderMockWithInvalidFlavor())
            expect(true).toBe(true)
        }
        catch(error){
            expect(error).toBe(error)
        }
    })

    test('Should fail CreateOrder when called with Invalid Personalization', async() =>{
        try{
            const { sut } = makeSut()
            await sut.create(createOrderMockWithInvalidPersonalization())
            expect(true).toBe(true)
        }
        catch(error){
            expect(error).toBe(error)
        }
    })

    test('Should fail CreateOrder when called with Invalid Size', async() =>{
        try{
            const { sut } = makeSut()
            await sut.create(createOrderMockWithInvalidSize())
            expect(true).toBe(true)
        }
        catch(error){
            expect(error).toBe(error)
        }
    })

    test('Should not call CreateOrderPizzaPersonalization when doesnt have personalization', async()=>{
        const { sut, createOrderPizzaPersonalizationStub } = makeSut()
        const spy = jest.spyOn(createOrderPizzaPersonalizationStub,'create')
        await sut.create(createOrderMockWithoutPersonalization())

        expect(spy).toHaveBeenCalledTimes(0)
    })
})