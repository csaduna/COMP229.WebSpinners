import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Ads, Size } from '../../model/ads.model';
import { AdsRepository } from '../../model/ads.repository';

@Component({
    selector: 'add-edit',
    templateUrl: './add_edit.component.html'
})

export class AddEditComponent {
    editing: boolean = false;
    item: Ads = new Ads();

    constructor(
        private repository: AdsRepository,
        private router: Router,
        activeRoute: ActivatedRoute
    ){
        if (activeRoute.snapshot.params["mode"] == "delete") {
            this.deleteItem(activeRoute.snapshot.params["id"]);
        }
        this.editing = activeRoute.snapshot.params["mode"] == "edit";

        if (this.editing) {
            this.item = repository.getItem(activeRoute.snapshot.params["id"]);
        }
        else {
            this.item.size = new Size();
        }
    }

    save(form: NgForm) {
        this.repository.saveAds(this.item);
        this.router.navigateByUrl("ads/list");
    }

    private deleteItem(id: string){
        this.repository.deleteAds(id);
        this.router.navigateByUrl("ads/list")
    }
}