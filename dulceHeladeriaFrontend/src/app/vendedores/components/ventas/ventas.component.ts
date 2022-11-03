import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from '../../interfaces/cliente-interface';
import { dtoNuevaVenta } from '../../interfaces/dtoVenta';
import { NuevaVentaService } from '../../services/nueva-venta.service';
import { ClientesComponent } from '../clientes/clientes.component';
import {formatDate} from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/producto';
import { Articulo } from '../../interfaces/articulo';
import { productoResponse } from '../../interfaces/productoResponse';
import { VentaRequestDto } from '../../interfaces/ventaRequestDto';

declare var window: any;

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(ClientesComponent) clientescomp: any;

  nuevaFactura: dtoNuevaVenta = {};
  venta: VentaRequestDto = {} as VentaRequestDto;
  productosVenta: Producto[] = [];
  total: number = 0;
  formModal: any;
  cliente: Cliente;
  artSeleccionados: Articulo[] = [];
  prodSeleccionado: Producto = {} as Producto;
  productos: Producto[] = [];
  imagen: string =
    'https://chio.com.ar/tienda/pehuajo/136-home_default/helado-artesanal-x-kilo.jpg';

  private subscription = new Subscription();
  ngAfterViewInit() {}

  constructor(
    private ventaService: NuevaVentaService,
    private productoService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('cantidades')
    );

    this.cargarProductos();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  clientChange(event: Cliente) {

    //this.nuevaVenta.Cliente=this.cliente;
  }
  cargarProductos() {
    this.subscription.add(
      this.productoService.getProductos().subscribe({
        next: (resp: productoResponse[]) => {
          resp.forEach((element) => {
            let prod: Producto = {
              id: element.id,
              nombre: element.name,
              precio: element.price,
              articulos: element.items.map((x) => {
                return { id: x.id, nombre: x.name, seleccionado: false };
              }),
              cantMaxArticulos: element.maxItemAmount,
            };
            this.productos.push(prod);
          });
        },
        error: (err) => {
          console.log(err.error);
        },
      })
    );
  }

  registrarVenta() {
    this.nuevaFactura = {
      Cliente: this.cliente,
      fecha: Date.now.toString(),
      producto: this.productosVenta.map(x => {return {cantidad: x.cantidad!, nombre: x.nombre, precio: x.precio}})
    }

    this.subscription.add(this.ventaService.setVenta(this.nuevaFactura));

    this.venta = {
      clientId: this.cliente.id!,
      clientName: this.cliente!.businessName,
      paymentMethod: 1,
      details: this.productosVenta.map((x) => {
        return {
          productId: x.id,
          productName: x.nombre,
          amount: x.cantidad!,
          salePrice: x.precio,
          productDetail: x.articulos.map((a) => {
            return { id: a.id, name: a.nombre };
          }),
        };
      }),
    };

    console.log(this.venta)

    this.subscription.add(
      this.ventaService.registrarVenta(this.venta).subscribe({
        next: () => {
          alert('exito');
          this.router.navigateByUrl('/vendedor/factura');
        },
        error: () => {
          alert('error al guardar la venta');
        },
      })
    );

    
  }

  openModal(producto: Producto) {
    this.formModal.show();
    this.prodSeleccionado = producto;
  }

  totalPrecio() {
    this.productosVenta.forEach((producto) => {
      this.total += producto.cantidad! * producto.precio!;
    });
  }
  cargarGustos(articulo: Articulo) {
    if (
      this.artSeleccionados.includes(articulo) ||
      this.artSeleccionados.length >= this.prodSeleccionado.cantMaxArticulos
    ) {
      return;
    }
    articulo.seleccionado = true;
    this.artSeleccionados.push(articulo);
  }

  quitarGustos(articulo: Articulo) {
    this.artSeleccionados = this.artSeleccionados.filter(
      (x) => x.id !== articulo.id
    );
    articulo.seleccionado = false;
  }
  EliminarProducto(prod: Producto) {
    this.productosVenta = this.productosVenta.filter((x) => x.id != prod.id);
    this.total -= prod.precio;
  }

  cerrarModal() {
    this.formModal.hide();
  }

  // registrarProducto(producto: productos) {
  //     this.Nuevoproducto.gustosS=this.gustosSelected;
  //     this.Nuevoproducto.cantidad= parseInt(this.selected.cantidad.toString());
  //     this.Nuevoproducto.nombre=this.selected.nombre;
  //     this.Nuevoproducto.precio= this.selected.precio!;
  //     this.nuevaVenta.producto!.push(this.Nuevoproducto);
  //     if(this.formaPagoGroup.controls.formaPago.value){
  //       this.nuevaVenta.formaPago = this.formaPagoGroup.controls.formaPago.value;
  //     }
  //     console.log(this.nuevaVenta.formaPago)
  //     this.nuevaVenta.fecha = new Date().toLocaleDateString();
  //     this.nuevaVenta.total=this.total;
  //     this.nuevaVenta.Cliente= this.cliente;
  //     cambiar ID de venta
  //     this.nuevaVenta.id=1;
  //     this.totalPrecio();
  //     this.cerrarModal();
  //     this.gustosSelected=[];
  //     this.cantidad=0;
  //     this.Nuevoproducto={nombre:'',precio: 0, cantidad: 0, gustosS:[]};
  //   }
  agregarProducto(prodSeleccionado: Producto) {
    this.productosVenta.push(prodSeleccionado);
    this.totalPrecio();
    this.cerrarModal();
    this.prodSeleccionado = {} as Producto;
    this.artSeleccionados = [];
    this.cliente = this.clientescomp.clienteSelected;
  }

esVentaValida(): boolean {
    if (this.cliente && this.productosVenta) {
      return true;
    } else {
      return false;
    }
  }
}
