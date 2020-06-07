import { Component, OnInit, Input } from '@angular/core';
import { WindowRefService } from '../reference.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [WindowRefService]
})
export class OrdersComponent implements OnInit {

  @Input() options;

  constructor(private winRef: WindowRefService) {

    console.log("table", this.options);
  }
  ngOnInit(): void {
  }
}
