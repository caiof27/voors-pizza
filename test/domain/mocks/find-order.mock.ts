import { OrderModel, OrderPizzaModel, PizzaPersonalizationModel } from "src/domain/models";

type OrderMockModel = Pick<OrderModel, 'finalPrize'> & { pizzas: PizzasMockModel[]}

type PizzasMockModel = Pick<OrderPizzaModel, 'flavorName' | 'sizeName' | 'totalPrize' | 'totalTime'> & { personalization: PersonalizationMockModel[] }

type PersonalizationMockModel = Pick<PizzaPersonalizationModel, 'personalizationName'>

export const findOrderMock = (): OrderMockModel => {
    return {
        finalPrize: 58.5,
        pizzas: [
            {
                totalPrize: 23.2,
                totalTime: 15,
                flavorName: "Calabresa",
                sizeName: "Pequena",
                personalization: [
                    {
                        personalizationName: "Extra Bacon"
                    },
                    {
                        personalizationName: "Sem Cebola"
                    }
                ]
            },
            {
                totalPrize: 35.3,
                totalTime: 30,
                flavorName: "Portuguesa",
                sizeName: "Média",
                personalization: [
                    {
                        personalizationName: "Sem Cebola"
                    },
                    {
                        personalizationName: "Borda Recheada"
                    }
                ]
            }
        ]
    }
}