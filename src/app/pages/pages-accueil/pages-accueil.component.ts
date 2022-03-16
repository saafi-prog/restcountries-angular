import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-accueil',
  templateUrl: './pages-accueil.component.html',
  styleUrls: ['./pages-accueil.component.css']
})
export class PagesAccueilComponent implements OnInit {
  public ListNameCountries!: any[];
  // est équivalent à :
  // public ListNAmeCountries: any[] | undefined;
  constructor() {
    
   }

  ngOnInit(): void {
    fetch("https://restcountries.com/v3.1/region/europe?fields=name")
    .then((datas) => datas.json())
    .then((response) => {
      console.log(response);
      this.ListNameCountries = response;
    });

    
  }

}
