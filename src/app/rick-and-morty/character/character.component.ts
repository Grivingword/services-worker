import { Component, OnInit } from '@angular/core';
import { RickyAndMortyService } from '../../_core/_services/ricky-and-morty.service';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: [ './character.component.scss' ]
})
export class CharacterComponent implements OnInit {
    characters: any;
    character: any;
    info: any;
    dialog: boolean
    constructor(
            public rickyService: RickyAndMortyService
    ) {
    }

    ngOnInit(): void {
        this.init()
    }

    init() {
        this.rickyService.getCharacter().subscribe((res) => {
            this.characters = res.results;
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
        this.rickyService.getCharacterPerPage(page).subscribe((res) => {
            this.characters = res.results;
            this.info = res.info;
            console.log(res);
        });
    }

    rows(): number {
        return Math.round(this.info?.count / this.info?.pages);
    }

    openDialog(character){
        this.character = { ...character };
        this.dialog = true;
    }

    hideDialog() {
        this.dialog = false;
    }
}
