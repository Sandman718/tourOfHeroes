import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mockHeroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

//component class file
export class HeroesComponent implements OnInit {
/*
  //hero properties of type Hero 
  hero: Hero = {
    id: 1,
  name: 'Windstorm'
  }
*/
heroes = HEROES;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
/*
export class heroComponent implements OnInit {
  
  heroes = HEROES;
  
  constructor() {}
  ngOnInit(): void {}
  
}
*/