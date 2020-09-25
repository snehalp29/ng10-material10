import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactManagerRoutingModule } from './contact-manager-routing.module';
import { MainContentComponent } from './main-content/main-content.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ContactManagerAppComponent } from './contact-manager-app.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    MainContentComponent,
    ToolbarComponent,
    SideNavComponent,
    ContactManagerAppComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    // FlexLayoutModule,
    ContactManagerRoutingModule,
  ],
  exports: [
    MainContentComponent,
    ToolbarComponent,
    SideNavComponent,
    ContactManagerAppComponent,
  ],
})
export class ContactManagerModule {}
