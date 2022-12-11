import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ads } from '../../model/ads.model';
import { AdsRepository } from '../../model/ads.repository';

@Component({
    selector: 'list-ads',
    templateUrl: './list.component.html'
})

export class ListComponent {

    constructor(private repository: AdsRepository,
        private router: Router) { }

    get adsList(): Ads[] {
        return this.repository.getAds();
    }

    deleteMethod(id: string) {
        if (confirm("Are you sure you want to delete?")) {
            this.router.navigateByUrl("ads/delete/" + id);
        }
    }

}