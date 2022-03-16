import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css']
})
export class CardCountryComponent implements OnInit {
@Input() public country : any;// cette méthode est fournie par son parent
// on la rend parametrable de l 'extérieur du composant grace au décorateur @input()
  constructor() { }

  ngOnInit(): void {
  }

}
