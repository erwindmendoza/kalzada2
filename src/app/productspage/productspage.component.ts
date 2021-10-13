import { Component, OnInit } from '@angular/core';
import { ProductssService } from '../productss.service';

@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.css']
})
export class ProductspageComponent implements OnInit {

  products: any = null;

  constructor (private productss: ProductssService) {}

  async ngOnInit () {
    this.products = await this.productss.Products();
  }

}
