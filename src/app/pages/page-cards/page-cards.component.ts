import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-cards',
  templateUrl: './page-cards.component.html',
  styleUrls: ['./page-cards.component.css']
})
export class PageCardsComponent implements OnInit {
public listCountriesCards !:any[];
// on met le point d 'exclamation car il ya le fetch et on est pas sur de la promesse de fetch attend 
// le résultat du fetch (comme la fonction async et await )
//si on enleve le point d 'exclamation on aura dans la console undefinded
  constructor() { }

  ngOnInit(): void {
    fetch("https://restcountries.com/v3.1/region/europe?fields=flags,name,capital,maps")
      .then((datas) => datas.json())
      .then((response) => {
        console.log(response);
        this.listCountriesCards = response;
      })
  }

}
