import { NgModule } from '@angular/core';
import { NgStyle } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RemediesComponent } from './remedies/remedies.component';
import { HealthtipsComponent } from './healthtips/healthtips.component';
import { SkincareComponent } from './skincare/skincare.component';
import { CartComponent } from './cart/cart.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'remedies',component:RemediesComponent},
  {path:'healthtips',component:HealthtipsComponent},
  {path:'skincare',component:SkincareComponent},
  {path:'cart',component:CartComponent},
  {path:'user',component:UserprofileComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'payment',component:PaymentComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'privacy',component:PrivacypolicyComponent},
  {path:'cancellation',component:CancellationComponent},
  {path:'bookmark',component:BookmarkComponent},
  {path:'profile',component:UserprofileComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
