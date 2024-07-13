import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import { 
    OrderPizzaModel,
    OrderPizzaPersonalizationModel,
    PizzaPersonalizationModel
} from 'src/domain/models'
import { 
    OrderPizza, 
    PizzaPersonalization
} from './';

@Table({ modelName: 'tb_order_pizza_personalization', schema: 'public', timestamps: false, freezeTableName: true })
export class OrderPizzaPersonalization extends Model<OrderPizzaPersonalizationModel> implements OrderPizzaPersonalizationModel {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number
    
    @ForeignKey(()=>OrderPizza)
    @Column({field:'order_pizza_id'})
    orderPizzaId: number;

    @ForeignKey(()=>PizzaPersonalization)
    @Column({field:'pizza_personalization_id'})
    pizzaPersonalizationId: number;

    @BelongsTo(()=>OrderPizza)
    orderPizza: OrderPizzaModel;

    @BelongsTo(()=>PizzaPersonalization)
    pizzaPersonalization: PizzaPersonalizationModel;

    @Column(DataType.VIRTUAL)
    personalizationName: string;
}
