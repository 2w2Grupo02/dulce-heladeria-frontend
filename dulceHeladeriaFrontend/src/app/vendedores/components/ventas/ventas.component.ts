import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from '../../interfaces/cliente-interface';
import { dtoNuevaVenta } from '../../interfaces/dtoVenta';
import { gustos } from '../../interfaces/gustos';
import { productos } from '../../interfaces/productos';
import { NuevaVentaService } from '../../services/nueva-venta.service';
import { ClientesComponent } from '../clientes/clientes.component';
import {formatDate} from '@angular/common';

declare var window: any;

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit, OnDestroy , AfterViewInit{
  @ViewChild(ClientesComponent) clientescomp: any;

  cliente: Cliente;
  gustos: gustos[] = [{ nombre: 'chocolate' }, { nombre: 'menta granizada' }, { nombre: 'vainilla' }, { nombre: 'frutilla' }, { nombre: 'DDL'}];
  gustosSelected: gustos[] = [];
  contadorGustos: number=0;
  ventas: dtoNuevaVenta;
  Nuevoproducto: productos={nombre:'',precio: 0, cantidad: 1, gustosS:[]};
  formModal: any;
  selected: productos= this.Nuevoproducto;
  nuevaVenta: dtoNuevaVenta = {total: 0, producto : []};
  //arrayTabla: productos[] = []

  arrayCard: productos[] = [{ nombre: 'helado 1KG', precio: 1000, cantidadMaxGustos: 4, imagen: "https://chio.com.ar/tienda/pehuajo/136-home_default/helado-artesanal-x-kilo.jpg",cantidad:1 },
  { nombre: 'helado 1/2kg', precio: 700, cantidadMaxGustos: 3, imagen: "https://chio.com.ar/tienda/pehuajo/136-home_default/helado-artesanal-x-kilo.jpg",cantidad:1 },
  { nombre: 'helado 1/4kg', precio: 500, cantidadMaxGustos: 2, imagen: "https://chio.com.ar/tienda/pehuajo/136-home_default/helado-artesanal-x-kilo.jpg",cantidad:1 }]

  private subscription = new Subscription();
  ngAfterViewInit() {
    //this.cliente = this.clientescomp.cliente;
  }
  //gustosForm = new FormGroup({
    //gustos: new FormControl('-1', Validators.required),
    //cantidad: new FormControl('',Validators.required),
  //});

  // ventaForm = new FormGroup({
  //   nombre: new FormControl('', Validators.required),
  //   precio: new FormControl(''),
  //   cantidad: new FormControl(Validators.min(1)),
  // });

  constructor(
    private ventaService: NuevaVentaService, private router: Router) { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('cantidades')
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  guardar() {
    console.log(this.nuevaVenta)
    this.subscription.add(this.ventaService.setVenta(this.nuevaVenta));
    this.router.navigateByUrl('/vendedor/factura')
    //this.subscription.add(
    //  this.ventaService.registrarVenta(this.ventas).subscribe({
    //    next: () => {
    //      alert('exito')
    //    },
    //    error: () => {
    //      alert('error al guardar la venta');
     //   }
     // })
    //);
  }



  openModal(producto: productos) {
    this.formModal.show();
    this.selected = producto
  }

  total: number=0;
  totalPrecio() {
    this.total=0;
    this.nuevaVenta.producto!.forEach(producto => {
      this.total += (producto.cantidad! * producto.precio!);
    });
  }

cargarGustos(gusto: gustos, cantMax: number){
  if(this.gustosSelected.includes(gusto) || this.gustosSelected.length>=cantMax){
    return
  }
  this.gustosSelected.push(gusto);
}

quitarGustos(gusto: gustos){
  const id=this.gustosSelected.indexOf(gusto);
  if(id != null){
    this.gustosSelected.splice(id,1);
  }
  
}
EliminarProducto(prod: productos){
  const id=this.nuevaVenta.producto!.indexOf(prod);
  if(id != null){
    this.nuevaVenta.producto!.splice(id,1);
  }
  
}

  cerrarModal() {
    this.formModal.hide();
  }

  registrarProducto(producto: productos) {
      this.Nuevoproducto.gustosS=this.gustosSelected;
      this.Nuevoproducto.cantidad=this.selected.cantidad;
      this.Nuevoproducto.nombre=this.selected.nombre;
      this.Nuevoproducto.precio= this.selected.precio!;
      this.nuevaVenta.producto!.push(this.Nuevoproducto);
      this.nuevaVenta.fecha = new Date().toLocaleDateString();
      this.nuevaVenta.total=this.total;
      this.nuevaVenta.Cliente= this.clientescomp.cliente;
      //cambiar ID de venta
      this.nuevaVenta.id=1;
      this.totalPrecio();
      this.cerrarModal();
      this.gustosSelected=[];
      //this.cantidad=0;
      this.Nuevoproducto={nombre:'',precio: 0, cantidad: 0, gustosS:[]};

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
  //}

//}
