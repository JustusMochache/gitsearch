import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { FormsModule }from '@angular/forms';
import { HttpClientModule }from '@angular/common/http';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
import { NativeComponent } from './native/native.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DateCountPipe,
    HighlightDirective,
    NativeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
   
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
