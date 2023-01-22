import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatWindowComponent } from './chat-window/chat-window.component';

import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    ScrollTopComponent,
    ChatBubbleComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
