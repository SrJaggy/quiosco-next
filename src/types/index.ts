import { Order, Product, OrderProducts } from "../generated/prisma/client";



export type OrderItem = Pick<Product, 'id'|'name'|'price'> & {
    quantity: number
    subtotal: number
}

export type OrderWithProducts = Order & {
    OrderProducts: (OrderProducts & {
        product: Product
    })[]
}