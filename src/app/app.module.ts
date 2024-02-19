import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './Application/dashboard/dashboard.component';
import { HeaderComponent } from './Application/header/header.component';
import { FooterComponent } from './Application/footer/footer.component';
import { PublicHeaderComponent } from './Application/public-header/public-header.component';
import { LoaderComponent } from './Application/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    PublicHeaderComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
