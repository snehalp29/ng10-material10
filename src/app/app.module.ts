import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactManagerModule } from './contact-manager/contact-manager.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContactManagerModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
