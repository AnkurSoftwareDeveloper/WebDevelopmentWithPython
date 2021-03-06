import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AllBestProductsComponent } from './all-best-products/all-best-products.component';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { AuthGuard } from './_guards';
import { MyorderComponent } from './myorder/myorder.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'loginPage', component: LoginPageComponent },
  { path: 'aboutPage', component: AboutPageComponent },
  { path: 'productsPage/:cat/:subcat', component: ProductsPageComponent },
  { path: 'allBestProducts', component: AllBestProductsComponent },
  { path: 'productDescription/:prod', component: ProductDescriptionComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'privacyPolicy', component: PrivacyPolicyComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'checkOut', component: CheckoutPageComponent, canActivate: [AuthGuard] },
  { path: 'myorder', component: MyorderComponent, canActivate: [AuthGuard] },
  { path: 'myaccount', component: MyaccountComponent, canActivate: [AuthGuard] },
  { path: 'changepassword', component: ChangepasswordComponent, canActivate: [AuthGuard] },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'searchPage', component: SearchPageComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
