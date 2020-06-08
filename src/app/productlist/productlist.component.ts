import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRefService } from '../reference.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  myorders;
  
  constructor(
    private winRef: WindowRefService,
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit() { }

  initPay() {
    //console.log(data);
    // call api to create order_id
    this.payWithRazor();
  }

  payWithRazor() {
    const options: any = {
      key: 'rzp_test_3Pt3kSMB9e2rSH',
      amount: 100, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: '', // company name or product name
      description: '',  // product description
      image: './assets/logo.png', // company logo or product image
      //order_id: val, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response, error) => {
      console.log(response.razorpay_order_id);
      options.response = response;
      console.log(options);
      this.myorders = options;
      this.zone.run(() => {
        this.router.navigate(['/orders', options]);
      });
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      alert("Transaction cancelled");
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }

}
