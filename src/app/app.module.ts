import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HealthtipsComponent } from './healthtips/healthtips.component';
import { CartComponent } from './cart/cart.component';
import { SkincareComponent } from './skincare/skincare.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RemediesComponent } from './remedies/remedies.component';
import { ProductComponent } from './product/product.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { OffPipe } from './off.pipe';
import { SliderComponent } from './slider/slider.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    HealthtipsComponent,
    CartComponent,
    SkincareComponent,
    UserprofileComponent,
    LoginComponent,
    SignupComponent,
    RemediesComponent,
    ProductComponent,
    PaymentComponent,
    AboutusComponent,
    ContactusComponent,
    PrivacypolicyComponent,
    OffPipe,
    SliderComponent,
    CancellationComponent,
    BookmarkComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
