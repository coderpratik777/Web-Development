import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `

    <button (click)="addproducts()">Display the product</button>
    <div *ngIf="products">
    <button (click)="sortproduct()">Sort By price</button>
    <div class="main1" *ngFor="let p of products">
      <div class="main2">
        <img src={{p.imgurl}}/>
        <h3>{{p.name | uppercase}}</h3>
        <h4>{{p.price | currency:'INR'}}</h4>
        <button>Add TO cart</button>
      </div>
      
    </div>
    </div>
  `,
  styles: [
    `
    .main1{
      margin:20px;
      display:inline-block;
      width:300px;
      height:400px;
      box-shadow:1px 1px 7px black;
      border-radius:9px;

    }
    .main2{
      margin:20px;
      padding:20px;

    }
    button{

          width: 74%;
    height: 28px;
    background-color: skyblue;
    border-radius: 6px;
    outline: 0;
    border: 0;
    cursor:pointer;
    }

    `
  ]
})
export class ProductListComponent {

  products!: any[]; 

  addproducts(){
    this.products= [
      { name: "Samsung s22 ultra", price: 10000, imgurl: "https://m.media-amazon.com/images/I/61L68P3+fxL._AC_UY218_.jpg" },
      { name: "I phone 13", price: 30000, imgurl: "https://m.media-amazon.com/images/I/61L68P3+fxL._AC_UY218_.jpg" },
      { name: "I phone 14", price: 1000000, imgurl: "https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UY218_.jpg" }
    ]
  }

  sortproduct(){
    this.products.sort((p1,p2)=>
    {
      if(p1.price>p2.price)
        return -1;
      else
        return 1;
    });
  }

}
