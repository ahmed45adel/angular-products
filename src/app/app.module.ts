import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateEqualModule } from 'ng-validate-equal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/WishList/WishList.reducer';
import { StaffOnlyComponent } from './staff-only/staff-only.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { LoginRegisterModuleModule } from './login-register-module/login-register-module.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,

    CartComponent,
    WishListComponent,
    StaffOnlyComponent,
    LoaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ValidateEqualModule,
    HttpClientModule,
    StoreModule,
    StoreModule.forRoot({ WishList: reducer }),
    LoginRegisterModuleModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
