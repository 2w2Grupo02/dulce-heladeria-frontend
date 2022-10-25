import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { dtoNuevaVenta } from '../../interfaces/dtoVenta';
import { gustos } from '../../interfaces/gustos';
import { productos } from '../../interfaces/productos';
import { NuevaVentaService } from '../../services/nueva-venta.service';

declare var window: any;

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit, OnDestroy {

  gustos: gustos[] = [{ nombre: 'chocolate' }, { nombre: 'menta granizada' }, { nombre: 'vainilla' }, { nombre: 'frutilla' }, { nombre: 'DDL'}];
  contadorGustos: number=0;
  ventas: dtoNuevaVenta;
  producto: productos;
  formModal: any;
  selected: productos;
  arrayTabla: productos[] = []

  arrayCard: productos[] = [{ nombre: 'helado 1KG', precio: 1000, cantidadMaxGustos: 4, imagen: "https://chio.com.ar/tienda/pehuajo/136-home_default/helado-artesanal-x-kilo.jpg" },
  { nombre: 'helado 1/2kg', precio: 700, cantidadMaxGustos: 3, imagen: "https://chio.com.ar/tienda/pehuajo/136-home_default/helado-artesanal-x-kilo.jpg" },
  { nombre: 'helado 1/4kg', precio: 500, cantidadMaxGustos: 2, imagen: "https://chio.com.ar/tienda/pehuajo/136-home_default/helado-artesanal-x-kilo.jpg" }]

  private subscription = new Subscription();

  gustosForm = new FormGroup({
    gustos: new FormControl('-1', Validators.required),
    cantidad: new FormControl('',Validators.required),
  });

  // ventaForm = new FormGroup({
  //   nombre: new FormControl('', Validators.required),
  //   precio: new FormControl(''),
  //   cantidad: new FormControl(Validators.min(1)),
  // });

  constructor(
    private ventaService: NuevaVentaService) { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('cantidades')
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  guardar() {


    this.subscription.add(
      this.ventaService.registrarVenta(this.ventas).subscribe({
        next: () => {
          alert('exito')
        },
        error: () => {
          alert('error al guardar la venta');
        }
      })
    );
  }



  openModal(producto: productos) {
    this.formModal.show();
    this.selected = producto
  }

  total: number;
  totalPrecio() {
    for (const prod of this.arrayTabla) {
      if (prod.precio != null) {
        this.total += prod.precio;
      }
    }
  }

contarGustos(){
  this.contadorGustos += 1
}

  cerrarModal() {
    this.formModal.hide();
  }

  registrarGustos(producto: productos) {
    if (this.gustosForm.valid) {
      this.arrayTabla.push(producto);
      this.totalPrecio();
      if (this.gustosForm.value.cantidad) {
        producto.cantidad = parseInt(this.gustosForm.value.cantidad);
      }
    }
  }
  // registrarVenta() {
  //   if (this.formNuevo.valid) {
  //     this.ventas = this.formNuevo.value as dtoNuevaVenta;
  //     console.log(this.ventas);

  //     if (this.formNuevo.controls.tipoGustos.value) {
  //       this.ventas.producto = parseInt(
  //         this.formNuevo.controls.tipoGustos.value
  //       );
  //     }

  //     this.subscription.add(
  //       this.ventaService.registrarVenta(this.ventas).subscribe({
  //         next: (resp: any) => {
  //           console.log(resp);
  //           alert("guardado exitoso!")
  //         },
  //         error: () => {
  //           alert('error');
  //         },
  //       })
  //     );
  //   }

  //   this.cerrarModal();
  // }

}
