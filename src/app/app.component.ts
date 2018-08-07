import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
declare let initSetting, prepHTML: any;
let widget_status = true

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
    widget_status = initSetting();
    $(`#button`).click(function() {
      $(`.custom-border`).toggle('');
    });
    $(`#exist-button`).click(function() {
      console.log(widget_status)
      if (widget_status === true) {
        $(`.custom-border`).toggle('');
      }
    });
  }
}
