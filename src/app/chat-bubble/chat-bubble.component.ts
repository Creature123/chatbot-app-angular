import { Component, OnInit , Inject, HostListener} from '@angular/core';
import { DOCUMENT } from '@angular/common'


@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css']
})
export class ChatBubbleComponent implements OnInit {

  windowScrolled: boolean | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) { }

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

  hello() {

  }

}
