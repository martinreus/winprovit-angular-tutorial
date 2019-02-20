import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrutasComponent } from './frutas/frutas-list/frutas.component';
import { HttpClientModule } from '@angular/common/http';
import { FrutasFormComponent } from './frutas/frutas-form/frutas-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FrutasComponent, FrutasFormComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
