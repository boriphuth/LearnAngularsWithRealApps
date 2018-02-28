import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MathService } from './services/math.service';
import { ProductService } from './services/product.service';

// 1.Pass Values from Component to View
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MathService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
