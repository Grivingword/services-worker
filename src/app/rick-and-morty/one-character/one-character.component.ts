import { Component, OnInit } from '@angular/core';
import { RickyAndMortyService } from '../../_core/_services/ricky-and-morty.service';

@Component({
  selector: 'app-one-character',
  templateUrl: './one-character.component.html',
  styleUrls: ['./one-character.component.scss']
})
export class OneCharacterComponent implements OnInit {
  character: any;
  page: number = 0;
  constructor( public rickyService: RickyAndMortyService) { }

  ngOnInit(): void {
    this.init()
  }

  init() {
    this.page++
    this.rickyService.getCharacterSimple(this.page).subscribe((res) => {
      this.character = res
      console.log(res);
    });
  }

}
