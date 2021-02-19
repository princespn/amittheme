import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {OrderService} from '../services/order.service';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'vex-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  list;
  isUserLoggedIn = false;
  constructor(private router: Router, private http: HttpClient, private  orderService: OrderService, private authService: AuthService) { }
  ngOnInit(): void {

  this.orderService.sendGetRequest().subscribe(data => {
    console.log(data);
    this.list = data;
  });

  this.authService.loggedInUserSubscribable.subscribe(response => {
    this.isUserLoggedIn = response;
  });
  }

}
