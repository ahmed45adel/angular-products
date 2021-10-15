import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-register-module/login/login.component';
import { RegisterComponent } from './login-register-module/register/register.component';
import { StaffOnlyComponent } from './staff-only/staff-only.component';
import { AuthGuardGuard } from './auth-guard.guard';
const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product-detail/:id', component: ProductCardComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'staff',
    component: StaffOnlyComponent,
    canActivate: [AuthGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
