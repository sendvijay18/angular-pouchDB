import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/login/signup.component';
import { MyNotesProvider } from './services/my-notes/my-notes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './shared/custom.material';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            CustomMaterialModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule],
  providers: [
    MyNotesProvider,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
