import { productos } from "./productos";

export interface dtoNuevaVenta{
    id?:number;
    total?: number;
    producto? : productos[];
}