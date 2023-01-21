import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollTopComponent,
    ChatBubbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
