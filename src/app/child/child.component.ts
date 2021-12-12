import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() frmParent: string;
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { 
    this.frmParent = "";
  }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit('Hello back from child');
  }

}
