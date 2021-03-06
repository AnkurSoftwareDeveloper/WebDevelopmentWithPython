import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MyServiceService } from './services/my-service.service';
import * as $ from 'jquery';
import { AuthService } from './services/auth.service';
import { User } from './_models/user';
import { stringify } from '@angular/compiler/src/util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  category: any[];
  subCategory: any[];
  cartno: number;
  currentUser: User;
  login_name: any;
  searchForm: FormGroup;
  // postData = 
  // {
  //   "category_name": "Fruits & Vegetables"
  // };

  constructor(private formBuilder: FormBuilder,private myservice: MyServiceService,private http: HttpClient,private route : ActivatedRoute,
    private authenticationService: AuthService, private router: Router,) {

      if(this.currentUser){
        let login_credential = JSON.parse(localStorage.getItem('currentUser'));
        this.login_name=login_credential.username;
        console.log(this.login_name);
      }  

      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    setInterval(() => {
      if(localStorage.getItem('cart')==null && localStorage.getItem('cart')==undefined){
        this.cartno=0;
      }
      else{
        this.cartno =Object.keys(JSON.parse(localStorage.getItem('cart'))).length;
        console.log(this.cartno);
      }
     },500)
    
   }
  
   ngOnInit(): void {

    this.myservice.getCategory().subscribe((data: any[])=>{
      this.category = data;
      console.log("allcategory", this.category);
    })  
    
    this.myservice.getSubCategory().subscribe((data: any[])=>{
      this.subCategory = data;
      console.log("allsubcategory", this.subCategory);
    })  

    if(this.currentUser){
      let login_credential = JSON.parse(localStorage.getItem('currentUser'));
      this.login_name=login_credential.username;
      console.log(this.login_name);
    }

    //////// scroll top////////
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  
  this.searchForm = this.formBuilder.group({
    search: ['', Validators.required],

  });
}

get f() { return this.searchForm.controls; }
onSubmit(){
  if(this.searchForm.controls.search.hasError('required')){
    // this.Error = "category name required";
    return
  }
  console.log("this.searchForm.value", this.searchForm.value);

  this.router.navigate(['/searchPage',{search: this.f.search.value}]).then(() => {
    window. location. reload();
    });
   
}

logout() {
  this.authenticationService.logout();
  this.router.navigate(['/']).then(() => {
    window. location. reload();
    });
}


}
