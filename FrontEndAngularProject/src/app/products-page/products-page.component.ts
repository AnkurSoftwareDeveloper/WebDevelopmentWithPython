import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from '../services/my-service.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products: any[];
  categoryId: any;
  subCategoryId: any;
  getSubCategoryById: any;
  getCategoryById: any;
  categ: any;
  cart: {};
  category: any[];
  subCategory: any[];
  stockAlert: any[];
  envURL: any;
  
  constructor(private myservice: MyServiceService, private route : ActivatedRoute) { 
    this.envURL =environment.baseURL;
    
    this.route.params.subscribe(params => {
      this.categoryId = params['cat'];
      this.subCategoryId = params['subcat'];
        console.log(this.categoryId,this.subCategoryId); // you should have your id here.
        this.ngOnInit();
      });

    if(localStorage.getItem('cart') == null)
    {
     this.cart={};
    }
    else{
    this.cart= JSON.parse(localStorage.getItem('cart'));
    }

  }

  ngOnInit(): void {
    this.myservice.getProducts().subscribe((data: any[])=>{
      this.products = data;
      console.log("allproducts", this.products);
    })  

    this.myservice.getCategoryById(this.categoryId).subscribe((data)=>{
      this.categ = data;
      this.getCategoryById = this.categ.category_name;
      console.log("getCategoryById", this.getCategoryById);
    })  

    if(this.subCategoryId !== "null"){
      this.myservice.getSubCategoryById(this.subCategoryId).subscribe((data)=>{
        this.categ = data;
        this.getSubCategoryById = this.categ.subCategory_name;
        console.log("getSubCategoryById", this.getSubCategoryById);
      })  
    }

    this.myservice.getCategory().subscribe((data: any[])=>{
      this.category = data;
      console.log("allcategory", this.category);
    })  
    
    this.myservice.getSubCategory().subscribe((data: any[])=>{
      this.subCategory = data;
      console.log("allsubcategory", this.subCategory);
    })  

    this.myservice.getStockAlert().subscribe((data: any[])=>{
      this.stockAlert = data;
      console.log("getStockAlert", this.stockAlert);
    })  

    
  }

  ConvertToJSON(prod: any) {
  //  console.log("ConvertToJSON", prod);
    var data = [];
    data.push(prod);
    //console.log(data);
    return data;
  }

  getCategoryName(id: any){
    for (var data of this.category) {
      if(data.category_id==id)
         return data.category_name;
    }
  }

  getSubCategoryName(id: any){
    for (var data of this.subCategory) {
      if(data.subCategory_id==id)
         return data.subCategory_name;
    }
  }

  getStockAlertName(id: any){
    for (var data of this.stockAlert) {
      if(data.stockalert_id==id)
         return data.stockalert_name;
    }
  }

  addCart(cartId:any) {
     console.log('working',cartId);
      var idstr= cartId.toString();
      console.log(idstr);
      if(this.cart[idstr]!= undefined) {
      this.cart[idstr] = this.cart[idstr]+1;
      }
      else{
      this.cart[idstr] = 1;
      }

      this.updateCart(this.cart);
  }

  updateCart(cart) {
    console.log(cart);
    for (var item in this.cart) {
      console.log("cartitem", item);
      if(cart[item]==null)
      {
        delete this.cart[item];
      }
    }
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
}

minusCart(cartId:any){
  console.log('minusCart',cartId);
  var idstr= cartId.toString();
  this.cart[idstr] = this.cart[idstr] - 1;
  this.cart[idstr] = Math.max(0, this.cart[idstr]);
  if(this.cart[idstr]==0)
  {
    delete this.cart[cartId];
  }  
  this.updateCart(this.cart);
}

plusCart(cartId:any){
  console.log('plusCart',cartId);
  var idstr= cartId.toString();
  this.cart[idstr] = this.cart[idstr] + 1;
  this.cart[idstr] = Math.max(0, this.cart[idstr]);
  this.updateCart(this.cart);
}


}
