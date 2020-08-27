import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent
    ], 
    imports: [
        RouterModule,
        LoginRoutingModule,
        CommonModule
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {}