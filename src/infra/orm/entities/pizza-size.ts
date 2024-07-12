import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { PizzaSizeModel } from 'src/domain/models'

@Table({ modelName: 'tb_pizza_size', schema: 'public', timestamps: false, freezeTableName: true })
export class PizzaSize extends Model<PizzaSizeModel> implements PizzaSizeModel {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number
    
    @Column
    size: string

    @Column
    prize: number

    @Column({field:'cooking_time'})
    cookingTime: number

}
