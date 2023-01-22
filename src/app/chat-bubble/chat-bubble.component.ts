import { Component, OnInit , Inject, HostListener} from '@angular/core';
import { DOCUMENT } from '@angular/common'
import {MatDialog} from '@angular/material/dialog';
import { ChatWindowComponent } from '../chat-window/chat-window.component';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css']
})
export class ChatBubbleComponent implements OnInit {

  windowScrolled: boolean | undefined;


  constructor(@Inject(DOCUMENT) private document: Document,private dialog: MatDialog) { }

  @HostListener("window:scroll", [])


  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  ngOnInit(): void {
  }

  OpenChatwindow() {
    const dialogRef = this.dialog.open(ChatWindowComponent,
      {
        panelClass : 'chat-window-dialog',
        position : {right : '20px',bottom : '60px'},
        disableClose : true
      },
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

}
