import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ToastNoAnimationModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterNotification } from './services/toastr.service';
import { NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { SearchFilter } from './pipe/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SearchFilter
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    ToastNoAnimationModule
    .forRoot({closeButton: true, timeOut: 1000, progressBar: false, preventDuplicates: true}),
    NgbModule.forRoot()
  ],
  providers: [ HttpService , ToasterNotification, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
