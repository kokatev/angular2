import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderContainerComponent } from './order-container/order-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OrderItemComponent,
    OrderContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
