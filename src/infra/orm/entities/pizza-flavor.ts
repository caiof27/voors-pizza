import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { PizzaFlavorModel } from 'src/domain/models'

@Table({ modelName: 'tb_pizza_flavor', schema: 'public', timestamps: false, freezeTableName: true })
export class PizzaFlavor extends Model<PizzaFlavorModel> implements PizzaFlavorModel {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number
    
    @Column
    flavor: string

    @Column({field:'additional_time'})
    additionalTime: number

}
