import { Component, OnInit } from '@angular/core';
import { GitDatInfoService } from '../git-dat-info.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  formBoi: FormGroup;
  formBuilder: FormBuilder = new FormBuilder;  // we'll want to be able to access this later outside of the controller
  
  apiResponse: string = '';
  imageArray: string[] = [];

  constructor (
    private gitDatInfo: GitDatInfoService, 
    formBuilder: FormBuilder)
    {
      this.formBoi = formBuilder.group({
        searchTerm: ['Bulbasaur']
      });
    }

  ngOnInit(){
    this.search()
  }

  search(){
    let pokeName = this.formBoi.controls['searchTerm'].value
    this.imageArray = []
    this.gitDatInfo.searchPokemon(pokeName).subscribe(
      (res: any) => {
        this.apiResponse = JSON.stringify(res);
      
        this.imageArray.push(res.sprites.front_default);
        this.imageArray.push(res.sprites.back_default);
        this.imageArray.push(res.sprites.front_shiny);
        this.imageArray.push(res.sprites.back_shiny);

        console.log("Image Array:" + this.imageArray)
      } );
  }

}