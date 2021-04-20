import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxTextOverflowClampModule } from 'ngx-text-overflow-clamp';

import { OrderByPipe } from 'app/pipes/order-by.pipe';
import { NewlinesPipe } from 'app/pipes/newlines.pipe';
import { ObjectFilterPipe } from 'app/pipes/object-filter.pipe';
import { LinkifyPipe } from 'app/pipes/linkify.pipe';

@NgModule({
  imports: [BrowserModule, MatProgressBarModule, MatSnackBarModule, NgxTextOverflowClampModule],
  declarations: [OrderByPipe, NewlinesPipe, ObjectFilterPipe, LinkifyPipe],
  exports: [
    MatProgressBarModule,
    MatSnackBarModule,
    NgxTextOverflowClampModule,
    OrderByPipe,
    NewlinesPipe,
    ObjectFilterPipe,
    LinkifyPipe
  ]
})
export class SharedModule { }
