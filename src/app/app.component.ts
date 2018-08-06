import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
declare let initBubble, prepHTML: any;

@Component({
  selector: 'custom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'chat-bubble-ang6';
  ngOnInit() {
    console.log('Initing ...');
    // prepHTML({relative_path: '../assets/'});
    const chatWindow = initBubble();
    $(`.button`).click(function() {
      $(`.custom-border`).toggle('on');
    });
  }
}
