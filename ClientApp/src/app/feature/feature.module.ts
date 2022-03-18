import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '@app/shared/shared.module';
import { ContainerComponent } from './container/container.component';
import { StoreListComponent } from './store/store-list/store-list.component';
import { AddStoreComponent } from './store/add-store/add-store.component';



@NgModule({
  declarations: [ DashboardComponent, ContainerComponent, StoreListComponent, AddStoreComponent],
  imports: [
    RouterModule.forChild([
      { path: 'store', component: StoreListComponent },
      { path: '', component: DashboardComponent }
    ]),
    CommonModule,
    MatTableModule,
   // NgxEchartsModule,
   // TrendModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    // NgApexchartsModule,
    // FormsModule,
    SharedModule
  ]
})
export class FeatureModule { }
