import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, DataType, Default } from 'sequelize-typescript';
import { OrderModel, OrderPizzaModel } from 'src/domain/models'
import { OrderPizza } from './';

@Table({ modelName: 'tb_order', schema: 'public', timestamps: false, freezeTableName: true })
export class Order extends Model<OrderModel> implements OrderModel {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number
    
    @Default(new Date().toISOString())
    @Column({field:'created_at'})
    createdAt: Date;

    @HasMany(()=>OrderPizza)
    pizzas: OrderPizzaModel[];

    @Column(DataType.VIRTUAL)
    finalPrize: number
}
