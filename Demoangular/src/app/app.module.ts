import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './ui/demo/demo.component';
import { ViewComponent } from './Interpolation/view/view.component';
import { PropertyComponent } from './binding/property/property.component';
import { EventComponent } from './binding/event/event.component';
import { AssignComponent } from './binding/assign/assign.component';
import { TwowaybindingComponent } from './binding/twowaybinding/twowaybinding.component';
import { from } from 'rxjs';
import { EmployComponent } from './binding/employ/employ.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ViewComponent,
    PropertyComponent,
    EventComponent,
    AssignComponent,
    TwowaybindingComponent,
    EmployComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EmployComponent]
})
export class AppModule { }
