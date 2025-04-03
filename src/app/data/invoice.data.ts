import { Invoice } from "../models/invoice";

export const invoiceData: any = {
    id: 1,
    name: 'Componentes de Pc',
    client: {
        name: 'Bladimir',
        lastname: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 15
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 21324354
    },
    items: [
        {
            id: 1,
            product: 'CPU AMD Ryzen 5 5600G',
            price: 299,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corsair Teclado Mecanico',
            price: 199,
            quantity: 2
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 199,
            quantity: 3
        }
    ]
}