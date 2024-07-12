import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { PizzaPersonalizationModel } from 'src/domain/models'

@Table({ modelName: 'tb_pizza_personalization', schema: 'public', timestamps: false, freezeTableName: true })
export class PizzaPersonalization extends Model<PizzaPersonalizationModel> implements PizzaPersonalizationModel {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number
    
    @Column
    personalization: string

    @Column({field:'additional_time'})
    additionalTime: number

    @Column({field:'additional_prize'})
    additionalPrize: number

}
