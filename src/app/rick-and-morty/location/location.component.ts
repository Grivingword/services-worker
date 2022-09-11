import { Component, OnInit } from '@angular/core';
import { RickyAndMortyService } from '../../_core/_services/ricky-and-morty.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(public rickyService: RickyAndMortyService) { }
  locations: any;
  location: any;
  info: any;
  dialog: boolean

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.rickyService.getLocation().subscribe((res) => {
      this.locations = res.results;
      this.info = res.info;
    });
  }

  paginate(event) {
    const page = event.page + 1;
    if (page === 1) {
      return this.init();
    }
    return this.paginated(page);
  }

  paginated(page) {
    this.rickyService.getLocationPerPage(page).subscribe((res) => {
      this.locations = res.results;
      this.info = res.info;
    });
  }

  rows(): number {
    return Math.round(this.info?.count / this.info?.pages);
  }

  openDialog(episode) {
    this.location = { ...episode };
    this.dialog = true;
  }

  random(character) {
    const value = character.toString().charAt(0)
    const number = Number(value) * 100

     return number.toString()
  }

}
