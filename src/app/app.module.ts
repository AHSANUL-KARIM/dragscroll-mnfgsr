import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragScrollModule } from 'ngx-drag-scroll';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MaterialExampleModule } from '../material.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DragScrollModule,
    MaterialExampleModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
