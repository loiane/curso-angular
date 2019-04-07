import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFileRoutingModule } from './upload-file-routing.module';
import { UploadFileComponent } from './upload-file/upload-file.component';

@NgModule({
  declarations: [UploadFileComponent],
  imports: [
    CommonModule,
    UploadFileRoutingModule
  ]
})
export class UploadFileModule { }
