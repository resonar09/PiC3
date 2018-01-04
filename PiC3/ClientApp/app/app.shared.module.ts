import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";

import {
    AlertModule, 
//AccordionModule,
//ButtonsModule,
//CarouselModule,
//CollapseModule,
//BsDatepickerModule,
BsDropdownModule,
//ModalModule,
//PaginationModule,
//ProgressbarModule,
//SortableModule,
//TabsModule,
//TimepickerModule,
//TooltipModule,
//TypeaheadModule
} from 'ngx-bootstrap';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { AssessComponent } from './components/assess/assess.component';

import { AssessmentTableComponent } from './components/assessment-table/assessment-table.component';

import { ClientAssessmentService } from "./services/client.assessment.service";
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';
//import { AlertifyService } from './services/alertify.service';

import { FilterPipe } from "./pipes/filter.pipe";
import { OrderByPipe } from "./pipes/orderby.pipe";



@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        LoginComponent,
        AssessComponent,
        DynamicFormComponent,
        AssessmentTableComponent,
        FilterPipe,
        OrderByPipe
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule.forRoot(),
        BsDropdownModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'login', component: LoginComponent },
            { path: 'assess', component: AssessComponent },
            { path: '**', redirectTo: 'home' }
        ])
        
    ],
    providers: [ClientAssessmentService, AuthService, LoginService, TitleCasePipe] 
})
export class AppModuleShared {
}
