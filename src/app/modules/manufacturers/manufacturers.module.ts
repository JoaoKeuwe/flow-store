import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { InputMaskModule } from '@ngneat/input-mask';
import { ManufacturersFormComponent } from './components/manufacturers-form/manufacturers-form.component';
import { ManufacturersTableComponent } from './components/manufacturers-table/manufacturers-table.component';
import { CreateManufacturersComponent } from './pages/create-manufacturers/create-manufacturers.component';
import { EditManufacturersComponent } from './pages/edit-manufacturers/edit-manufacturers.component';
import { ListManufacturersComponent } from './pages/list-manufacturers/list-manufacturers.component';
import { ManufacturerService } from './services/manufacturer.service';


@NgModule({
  declarations: [
    CreateManufacturersComponent,
    ListManufacturersComponent,
    ManufacturersTableComponent,
    ManufacturersFormComponent,
    EditManufacturersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSortModule,
    HttpClientModule,
    RouterModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    InputMaskModule
  ],
  exports: [
    ListManufacturersComponent,
    CreateManufacturersComponent
  ],
  providers: [ManufacturerService]
})
export class ManufacturersModule { }
