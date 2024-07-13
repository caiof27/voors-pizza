import { literal } from "sequelize";
import { Literal } from "sequelize/types/utils";

export const sumTotalTime = (
    orderPizzaId: string,
    alias: string
): [Literal,string] => 
  [
    literal(`(
        with pizza_time as (SELECT
            "pizza_flavor".additional_time AS additional_time_flavor,
            "pizza_size".cooking_time as cooking_time,
            COALESCE(SUM("pizza_personalization".additional_time), 0) AS additional_time_sum
        FROM
            "tb_order" AS "order"
        LEFT JOIN "tb_order_pizza" AS "order_pizza" ON
            "order_pizza".order_id = "order".id
        LEFT JOIN "tb_pizza_flavor" AS "pizza_flavor" ON
            "pizza_flavor".id = "order_pizza".pizza_flavor_id
        LEFT JOIN "tb_pizza_size" AS "pizza_size" ON
            "pizza_size".id = "order_pizza".pizza_size_id
        LEFT JOIN "tb_order_pizza_personalization" AS "order_pizza_personalization" ON
            "order_pizza_personalization".order_pizza_id = "order_pizza".id
        LEFT JOIN "tb_pizza_personalization" AS "pizza_personalization" ON
            "pizza_personalization".id = "order_pizza_personalization".pizza_personalization_id
        WHERE
            "order_pizza".id = ${orderPizzaId}
        GROUP BY
            "pizza_flavor".additional_time,
            "pizza_size".cooking_time)
        select 
            SUM(additional_time_flavor + cooking_time + additional_time_sum) as totalTime
        from pizza_time
    )`),
    alias
  ]

export const sumTotalPrize = (
    orderPizzaId: string,
    alias: string
): [Literal,string] => 
  [
    literal(`(
        with pizza_prize as (SELECT
            "pizza_size".prize as prize,
            COALESCE(SUM("pizza_personalization".additional_prize), 0) AS additional_prize_sum
        FROM
            "tb_order" AS "order"
        LEFT JOIN "tb_order_pizza" AS "order_pizza" ON
            "order_pizza".order_id = "order".id
        LEFT JOIN "tb_pizza_flavor" AS "pizza_flavor" ON
            "pizza_flavor".id = "order_pizza".pizza_flavor_id
        LEFT JOIN "tb_pizza_size" AS "pizza_size" ON
            "pizza_size".id = "order_pizza".pizza_size_id
        LEFT JOIN "tb_order_pizza_personalization" AS "order_pizza_personalization" ON
            "order_pizza_personalization".order_pizza_id = "order_pizza".id
        LEFT JOIN "tb_pizza_personalization" AS "pizza_personalization" ON
            "pizza_personalization".id = "order_pizza_personalization".pizza_personalization_id
        WHERE
            "order_pizza".id = ${orderPizzaId}
        GROUP BY
            "pizza_size".prize)
        select 
            SUM(additional_prize_sum + prize) as totalPrize
        from pizza_prize
    )`),
    alias
  ]