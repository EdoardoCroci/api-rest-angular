import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataRestClientService } from './data-rest-client.service';
import { DataTableComponent } from './data-table/data-table.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { InsertFormComponent } from './insert-form/insert-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    InsertFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule
  ],
  providers: [
    DataRestClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
