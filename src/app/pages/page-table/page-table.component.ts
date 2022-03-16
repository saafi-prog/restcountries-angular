import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.css']
})
export class PageTableComponent implements OnInit {
public listCountries!:any[];
public num= new Intl.NumberFormat("en");
  constructor() { }

  ngOnInit(): void {

    fetch("https://restcountries.com/v3.1/region/europe?fields=name,capital,area,population,cca2")
      .then((datas) => datas.json())
      .then((response) => {
        console.log(response);
        this.listCountries = response;
      })
  }

}
