import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import  {provideEnvironmentNgxMask, NgxMaskDirective } from "ngx-mask";
import { AlertComponent } from './alert/alert.component';

//import { ModalService } from "../services/modal.service"; //2nd way to register services


@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent
  ],
  // array of services - AVAILABLE FOR ANY COMPONENT INSIDE THIS MODULE - // 2nd way to register services
  //providers: [
  //  ModalService
  //],
  providers: [provideEnvironmentNgxMask()]
})
export class SharedModule { }
