import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ingreso } from 'src/app/administradores/interfaces/ingreso';
@Component({
  selector: 'app-venta-final-dia',
  templateUrl: './venta-final-dia.component.html',
  styleUrls: ['./venta-final-dia.component.css']
})
export class VentaFinalDiaComponent implements OnInit{
total: number;
ingresos: ingreso[];
  constructor(public dialogRef:MatDialogRef<VentaFinalDiaComponent>) { }

  ngOnDestroy(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

 closeDialog(){
  this.dialogRef.close();
 }

}
