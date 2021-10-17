import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ValidateEqualModule } from 'ng-validate-equal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/WishList/WishList.reducer';
import { StaffOnlyComponent } from './staff-only/staff-only.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { LoginRegisterModuleModule } from './login-register-module/login-register-module.module';
import { SharedModule } from './shared/shared.module';
import { EgpPipe } from './egp.pipe';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    CartComponent,
    WishListComponent,
    StaffOnlyComponent,
    LoaderComponent,
    EgpPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    ValidateEqualModule,
    StoreModule,
    StoreModule.forRoot({ WishList: reducer }),
    LoginRegisterModuleModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

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
