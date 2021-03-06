import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatCardModule, 
         MatInputModule,
         MatSnackBarModule,
         MatToolbarModule } from '@angular/material';


import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { NewMessageComponent } from './new-message.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav.component';

@NgModule({
  declarations: [
    AppComponent, 
    MessagesComponent,
    NewMessageComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [WebService]
})
export class AppModule { }
