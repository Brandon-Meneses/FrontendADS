import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  selectedProducto: Producto | null = null;
  newProducto: Producto = { idProducto: 0, nombre: '', descripcion: '', precio: 0, stock: 0 };

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos().subscribe(productos => this.productos = productos);
  }

  addProducto(): void {
    this.productoService.addProducto(this.newProducto).subscribe(producto => {
      this.productos.push(producto);
      this.newProducto = { idProducto: 0, nombre: '', descripcion: '', precio: 0, stock: 0 };
    });
  }

  updateProducto(): void {
    if (this.selectedProducto) {
      this.productoService.updateProducto(this.selectedProducto).subscribe(() => {
        this.selectedProducto = null;
        this.getProductos();
      });
    }
  }

  deleteProducto(id: number): void {
    this.productoService.deleteProducto(id).subscribe(() => {
      this.productos = this.productos.filter(producto => producto.idProducto !== id);
    });
  }

  selectProducto(producto: Producto): void {
    this.selectedProducto = { ...producto };
  }
}
