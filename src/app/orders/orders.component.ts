import { Component, OnInit, Input } from '@angular/core';
import { WindowRefService } from '../reference.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [WindowRefService]
})
export class OrdersComponent implements OnInit {

  @Input() myorders;
   
  myorders1;
  constructor(
    private winRef: WindowRefService,
    private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.myorders1 = this.route.snapshot.paramMap.get('options');
    console.log(this.myorders1);
  }
}
