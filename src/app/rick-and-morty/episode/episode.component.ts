import { Component, OnInit } from '@angular/core';
import { RickyAndMortyService } from '../../_core/_services/ricky-and-morty.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  constructor(public rickyService: RickyAndMortyService) { }
  episodes: any;
  episode: any;
  info: any;
  dialog: boolean

  ngOnInit(): void {
    this.init()
  }

  init() {
    this.rickyService.getEpisode().subscribe((res) => {
      this.episodes = res.results;
      this.info = res.info;
      console.log(res);
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
    this.rickyService.getEpisodePerPage(page).subscribe((res) => {
      this.episodes = res.results;
      this.info = res.info;
      console.log(res);
    });
  }

  rows(): number {
    return Math.round(this.info?.count / this.info?.pages);
  }

  openDialog(episode) {
    this.episode = { ...episode };
    this.dialog = true;
  }

}
