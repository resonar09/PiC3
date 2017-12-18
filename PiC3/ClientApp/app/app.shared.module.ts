import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';


import { AssessmentTableComponent } from './components/assessment-table/assessment-table.component';

import { ClientAssessmentService } from "./components/services/client.assessment.service";

import { FilterPipe } from "./pipes/filter.pipe";
import { OrderByPipe } from "./pipes/orderby.pipe";

import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        AssessmentTableComponent,
        FilterPipe,
        OrderByPipe
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        FormsModule,

        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
        
    ],
    providers: [ClientAssessmentService] 
})
export class AppModuleShared {
}
