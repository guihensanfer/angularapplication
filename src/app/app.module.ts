import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormTestComponent } from './form-test/form-test.component';
import { FetchTableComponent } from './fetch-table/fetch-table.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';

const routes: Routes = [
  // ... outras rotas ...
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'formtest', component: FormTestComponent },
  { path: 'form2', component: FormValidationsComponent },
  { path: 'fetch1', component: FetchTableComponent },
  { path: 'pipes', component: PipesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginPageComponent,
    FormTestComponent,
    FetchTableComponent,
    PipesComponent,
    FormValidationsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
