import { Component, OnInit } from '@angular/core';
import { GitDatInfoService } from '../git-dat-info.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CacheDatInfoService } from '../cache-dat-info.service';
import { Player } from '../player';

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
    formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private cacheDatInfo: CacheDatInfoService
    )
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
      
        if (res.sprites.front_default) this.imageArray.push(res.sprites.front_default)
        if (res.sprites.front_female) this.imageArray.push(res.sprites.front_female);
        if (res.sprites.back_default) this.imageArray.push(res.sprites.back_default);
        if (res.sprites.back_female) this.imageArray.push(res.sprites.back_female);
        if (res.sprites.front_shiny) this.imageArray.push(res.sprites.front_shiny);
        if (res.sprites.front_shiny_female) this.imageArray.push(res.sprites.front_shiny_female);
        if (res.sprites.back_shiny) this.imageArray.push(res.sprites.back_shiny);
        if (res.sprites.back_shiny_female) this.imageArray.push(res.sprites.back_shiny_female);

        console.log("Image Array:" + this.imageArray)
      } );
  }

  
  
  selectSprite (imageURL: string) {
    const playerID = Number(this.route.snapshot.paramMap.get('player'))
    
    let player = new Player(playerID, imageURL)

    this.cacheDatInfo.savePlayerData(player)

  }

}