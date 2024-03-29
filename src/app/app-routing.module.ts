import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { DashboardComponent } from './Application/dashboard/dashboard.component';
import { HeaderComponent } from './Application/header/header.component';
import { PublicHeaderComponent } from './Application/public-header/public-header.component';
import { FooterComponent } from './Application/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { authGuard } from './core/guards/auth.guard';
import { AddCategoryComponent } from './Application/dashboard/add-category/add-category.component';
import { FlnComponent } from './Application/dashboard/fln/fln.component';
import { AbhishekComponent } from './Application/dashboard/abhishek/abhishek.component';
import { SchoolInspectionComponent } from './Application/school-inspection/school-inspection.component';
import { LoadScreenComponent } from './Application/load-screen/load-screen.component';
const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  // {
  //   path: 'header',
  //   component: HeaderComponent,
  // },
  // {
  //   path: 'footer',
  //   component: FooterComponent,
  // },
  // {
  //   path: 'public-header',
  //   component: PublicHeaderComponent,
  // },
  {
    path: 'dashboard/AddCategory',
    component: AddCategoryComponent,
    canActivate: [authGuard],
  },
  {
    path: 'dashboard/Fln',
    component: FlnComponent,
    canActivate: [authGuard],
  },
  {
    path: 'dashboard/Abhishek',
    component: AbhishekComponent,
    canActivate: [authGuard],
  },
  {
    path: 'dashboard/school-inspection',
    component: SchoolInspectionComponent,
    canActivate: [authGuard],
  },

  {
    path: '**',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
