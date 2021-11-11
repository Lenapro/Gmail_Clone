import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  _opened: boolean = true;

  _toggleSidebar() {
    this._opened = !this._opened;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
