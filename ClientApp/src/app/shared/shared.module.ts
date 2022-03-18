import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsMenuComponent } from './ui-elements/settings-menu/settings-menu.component';
import { DateMenuComponent } from './ui-elements';
import { HeaderModule } from './header/header.module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DailyLineChartComponent, 
PerformanceChartComponent, ProjectStatChartComponent,
 RevenueChartComponent, ServerChartComponent, SupportRequestsComponent, VisitsChartComponent } from './components';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TrendModule } from 'ngx-trend';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { DataListComponent } from './components/data-list/data-list.component';

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    SettingsMenuComponent,
    DateMenuComponent,
    LayoutComponent,
    DailyLineChartComponent,
    PerformanceChartComponent,
    ProjectStatChartComponent,
    RevenueChartComponent,
    ServerChartComponent,
    SupportRequestsComponent,
    VisitsChartComponent,
    FilterFormComponent,
    DataListComponent,


  ],
  imports: [
    CommonModule,
    MatTableModule,
    HeaderModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatProgressBarModule,
    CommonModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    MatSidenavModule,
    NgApexchartsModule,
   // NgxEchartsModule,
  ],
  exports: [
    HeaderModule,
    SidebarComponent,
    FooterComponent,
    SettingsMenuComponent,
    DateMenuComponent,
    LayoutComponent,
    DailyLineChartComponent,
    PerformanceChartComponent,
    ProjectStatChartComponent,
    RevenueChartComponent,
    ServerChartComponent,
    SupportRequestsComponent,
    VisitsChartComponent,
    FilterFormComponent,
    DataListComponent
  ]
})
export class SharedModule { }
