import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderModule } from './components';
import { CoreModule } from './core/core.module';
import { AuthModule, TimeLineModule } from './pages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    TimeLineModule,
    HeaderModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
