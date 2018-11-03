namespace ETOPM.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'ETOPM.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

