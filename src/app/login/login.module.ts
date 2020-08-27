import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent
    ], 
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {}