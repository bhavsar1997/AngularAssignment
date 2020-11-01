import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  public items: any[] = [{
    firstName: '',
    lastName: '',
    contactNo: '',
    city: ''
  }];

  cities: any
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(environment.API_URL+"/getcity")
      .subscribe(Response => {
        this.cities = Response;
        this.items[0].city = this.cities[0];
      });
  }

  addItemsTitle = "Add Items"

  addRow() {
    this.items.push({
      firstName: '',
      lastName: '',
      contactNo: '',
      city: this.cities[0]
    });
  }

  deleteRow(i: any) {
    this.items.splice(i, 1);
  }
  submitDetails() {
    let count = 0;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].firstName == '' || this.items[i].lastName == '' || this.items[i].contactNo == '') {
        count = 1;
        break;
      }
    }
    if (count == 0) {
      let listItems = JSON.parse(localStorage.getItem('items'));
      if (listItems !== null) {
        for (let i = 0; i < this.items.length; i++) {
          listItems.push(this.items[i])
        }
        localStorage.setItem('items', JSON.stringify(listItems));
      } else {
        localStorage.setItem('items', JSON.stringify(this.items));
      }
      alert('Details Saved to Lcoal Storage');
      this.router.navigate(['/listItem'])
    } else {
      alert('Please Check values');
    }
  }
}