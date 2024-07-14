import { CreateOrder } from "src/domain/usecases";

export const createOrderMock = (): CreateOrder.Params => {
    return {
        pizzas: [
            {
                flavorId: 1,
                sizeId: 1,
                personalization: [
                    {
                        personalizationId: 1
                    },
                    {
                        personalizationId: 2
                    }
                ]
            },
            {
                flavorId: 2,
                sizeId: 2,
                personalization: [
                    {
                        personalizationId: 2
                    },
                    {
                        personalizationId: 3
                    }
                ]
            }
        ]
    }
}

export const createOrderMockWithoutPersonalization = (): CreateOrder.Params =>{
    return {
        pizzas: [
            {
                flavorId: 1,
                sizeId: 1,
            },
            {
                flavorId: 2,
                sizeId: 2,
            }
        ]
    }
}

export const createOrderMockWithInvalidSize = (): CreateOrder.Params => {
    return {
        pizzas: [
            {
                flavorId: 1,
                sizeId: 4,
                personalization: [
                    {
                        personalizationId: 1
                    },
                    {
                        personalizationId: 2
                    }
                ]
            },
            {
                flavorId: 2,
                sizeId: 5,
                personalization: [
                    {
                        personalizationId: 2
                    },
                    {
                        personalizationId: 3
                    }
                ]
            }
        ]
    }
}

export const createOrderMockWithInvalidFlavor = (): CreateOrder.Params => {
    return {
        pizzas: [
            {
                flavorId: 4,
                sizeId: 1,
                personalization: [
                    {
                        personalizationId: 1
                    },
                    {
                        personalizationId: 2
                    }
                ]
            },
            {
                flavorId: 5,
                sizeId: 2,
                personalization: [
                    {
                        personalizationId: 2
                    },
                    {
                        personalizationId: 3
                    }
                ]
            }
        ]
    }
}

export const createOrderMockWithInvalidPersonalization = (): CreateOrder.Params => {
    return {
        pizzas: [
            {
                flavorId: 1,
                sizeId: 1,
                personalization: [
                    {
                        personalizationId: 4
                    },
                    {
                        personalizationId: 5
                    }
                ]
            },
            {
                flavorId: 2,
                sizeId: 2,
                personalization: [
                    {
                        personalizationId: 6
                    },
                    {
                        personalizationId: 7
                    }
                ]
            }
        ]
    }
}