import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Simple Test', 'https://cdn.pixabay.com/photo/2017/03/17/10/29/breakfast-2151201_640.jpg'),
    new Recipe('A test recipe', 'Simple Test2', 'https://cdn.pixabay.com/photo/2017/03/17/10/29/breakfast-2151201_640.jpg')

  ]
  constructor(){

  }
  ngOnInit(): void {
    
  }
}
