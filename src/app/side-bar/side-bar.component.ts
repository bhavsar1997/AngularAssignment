import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  DummyText: any;
  lis = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(environment.API_URL+"/getdesc")
      .subscribe(Response => {
        this.DummyText = Response.toString();
      });
  }
}