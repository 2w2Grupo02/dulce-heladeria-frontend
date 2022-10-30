import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente-interface';
import { dtoNuevaVenta } from '../../interfaces/dtoVenta';
import { productos } from '../../interfaces/productos';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  Factura: dtoNuevaVenta= {id:1,total: 2700, fecha: '31/10/2022', 
    producto : [{ nombre: 'Helado de 1 kilo', precio:1000, cantidad:2, gustosS :[{nombre:'Limón'},{nombre:'Chocolate'},{nombre:'Crema Americana'}]},
                { nombre: 'Helado de 1/2 kilo', precio:700, cantidad:1, gustosS :[{nombre:'Frutilla'},{nombre:'Tramontana'},{nombre:'Banana con DDL'}]}], 
    Cliente: {businessName: 'Juan Perez', identifierTypeId: 1, identifier:'20654135', homeAdress: 'San Lorenzo 840', email: 'jperez@gmail.com'}};
  
    TiposIdentifiers: string[]=['','DNI','CUIT','CUIL'];

  constructor() { }
  
  ngOnInit(): void {
  }

}
