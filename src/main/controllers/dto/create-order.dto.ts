import { Type } from "class-transformer"
import { IsNumber, IsOptional, ValidateNested } from "class-validator"

class PersonalizationDto {

    @IsNumber()
    personalizationId: number

}

class PizzaDto{

    @IsNumber()
    flavorId: number

    @IsNumber()
    sizeId: number
    
    @Type(()=>PersonalizationDto)
    @ValidateNested({ each: true })
    @IsOptional()
    personalization: PersonalizationDto[]
    
}

export class CreateOrderDto{

    @Type(()=>PizzaDto)
    @ValidateNested({ each: true })
    pizzas: PizzaDto[]

}