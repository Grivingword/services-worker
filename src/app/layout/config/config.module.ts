import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { SharedNgModule } from "../../shared-ng.module";

@NgModule({
    imports: [
        CommonModule,
        SharedNgModule
    ],
    declarations: [
        ConfigComponent
    ],
    exports: [
        ConfigComponent
    ]
})
export class AppConfigModule { }
