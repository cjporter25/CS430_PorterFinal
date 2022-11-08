import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Import the Cordova Camera Plugin - App Module TypeScript
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  //Remember to add the Camera plugin as a provider
  providers: [Camera, 
             { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
             ],
  bootstrap: [AppComponent],
})
export class AppModule {}
