import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputMaskModule } from '@ngneat/input-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './modules/components/components.module';
import { ProfileComponent } from './layouts/admin-layout/components/profile/profile.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    InputMaskModule,
  ],
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ComponentsModule]
})
export class AppModule { }
