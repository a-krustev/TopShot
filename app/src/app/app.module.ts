import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MyModule } from './my-module';
import { AppRoutingModule } from './app-routing.module';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { API_ERROR } from './shared/constants';
import { BehaviorSubject } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    CategoryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    MyModule.withProviders(),
    NgbModule
  ],
  providers: [
    appInterceptorProvider,
    {
      provide: API_ERROR,
      useValue: new BehaviorSubject(null)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
