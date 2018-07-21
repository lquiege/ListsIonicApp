import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Lists } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { PendientesPage } from '../pages/pendientes/pendientes';
import { TerminadosPage } from '../pages/terminados/terminados';

import { ServicesDeseos } from '../providers/services-deseos-service/services-deseos-service';
import { AgregarPage } from '../pages/agregar/agregar';
import { FilterCompletedPipe } from '../pipes/filter-completed/filter-completed';
import { ListsComponent } from '../component/lists.component';



@NgModule({
  declarations: [
    Lists,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    FilterCompletedPipe,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Lists)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Lists,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesDeseos
  ]
})
export class AppModule {}
