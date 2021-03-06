import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'projects/admin/src/app/services/my-service.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-productlist-page',
  templateUrl: './productlist-page.component.html',
  styleUrls: ['./productlist-page.component.css']
})
export class ProductlistPageComponent implements OnInit {

  products: any[];
  category: any[];
  subCategory: any[];
  stockAlert: any[];
  envURL:any;
  constructor(private myservice: MyServiceService,private http: HttpClient,private route : ActivatedRoute
    ,private router: Router) {
    this.envURL =environment.baseURL;
   }

  ngOnInit(): void {
    this.myservice.getProducts().subscribe((data: any[])=>{
      this.products = data;
      console.log(this.products);
    })  

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

  editProduct(id: any){
    this.router.navigate(['/editproduct', id]).then(() => {
      window. location. reload();
      });  
  }

  delProduct(id: any){
    var result = confirm("Want to delete?");
    if (result) {       
      this.myservice.deleteProducts(id).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)); 
        alert('Deleted');
        window. location. reload();
    } 
  }

}
