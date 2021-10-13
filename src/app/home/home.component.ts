import { Component, OnInit } from '@angular/core';
import { ProductssService } from '../productss.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any = null;

  constructor (private productss: ProductssService) {}

  async ngOnInit () {
    this.products = await this.productss.Products();
  }

}
