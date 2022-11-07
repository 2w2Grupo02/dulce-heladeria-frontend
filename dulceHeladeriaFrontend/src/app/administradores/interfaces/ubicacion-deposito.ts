import { Deposito } from "./deposito";

export interface UbicacionDeposito{
    column?: string;
    row?: string;
    capacity?: number;
    depositId?: number;
    itemTypeId?: number;
    deletionDate?: Date;
    id: number;
}