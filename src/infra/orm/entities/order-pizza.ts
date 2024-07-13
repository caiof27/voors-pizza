import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import { 
    OrderModel,
    OrderPizzaModel, 
    OrderPizzaPersonalizationModel, 
    PizzaFlavorModel,
    PizzaSizeModel
} from 'src/domain/models'
import { 
    Order, 
    OrderPizzaPersonalization, 
    PizzaFlavor,
    PizzaSize
} from './';

@Table({ modelName: 'tb_order_pizza', schema: 'public', timestamps: false, freezeTableName: true })
export class OrderPizza extends Model<OrderPizzaModel> implements OrderPizzaModel {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number
    
    @ForeignKey(()=>Order)
    @Column({field:'order_id'})
    orderId: number;

    @ForeignKey(()=>PizzaFlavor)
    @Column({field:'pizza_flavor_id'})
    pizzaFlavorId: number;

    @ForeignKey(()=>PizzaSize)
    @Column({field:'pizza_size_id'})
    pizzaSizeId: number;

    @BelongsTo(()=>Order)
    order: OrderModel;

    @BelongsTo(()=>PizzaFlavor)
    pizzaFlavor: PizzaFlavorModel;

    @BelongsTo(()=>PizzaSize)
    pizzaSize: PizzaSizeModel;

    @HasMany(()=>OrderPizzaPersonalization)
    personalization: OrderPizzaPersonalizationModel[];

    @Column(DataType.VIRTUAL)
    totalPrize: number

    @Column(DataType.VIRTUAL)
    totalTime: number

    @Column(DataType.VIRTUAL)
    flavorName: string

    @Column(DataType.VIRTUAL)
    sizeName: string
    
}
