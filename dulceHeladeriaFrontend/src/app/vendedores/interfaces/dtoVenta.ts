import { productos } from "./productos";

export interface dtoNuevaVenta{
    id:number;
    cantidad?: number;
    total?: number;
    subtotal?: number;
    producto? : productos;
}