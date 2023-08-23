import { Component, OnInit } from '@angular/core';
import { GitDatInfoService } from '../git-dat-info.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor (
    private gitDatInfo: GitDatInfoService,
  ) {}

  initialPokemon: string = 'bulbasaur'
  apiResponse: string = ''

    ngOnInit(): void {
      this.search(this.initialPokemon)
    }

    search(name: string) {
      this.gitDatInfo.searchPokemon(name).subscribe(
        (res: any) => this.apiResponse = res.sprites["front_default"])
    }

}
