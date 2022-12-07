import { Injectable } from "@angular/core";
import { Ads } from "./ads.model";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class AdsRepository {
    private ads: Ads[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getAdsList().subscribe(data => {
            this.ads = data;
        });
    }

    getAds(): Ads[] {
        return this.ads;
    }

    getItem(id: string): Ads {
        return (this.ads.find(item => item._id === id)!);
    }

    saveAds(item: Ads) {
        if (item._id == null){
            this.dataSource.insertAds(item)
            .subscribe(p => this.ads.push(p));
        } else {
            this.dataSource.updateAds(item)
            .subscribe(p => {
                this.ads.splice(this.ads
                    .findIndex(i => i._id == item._id), 1, item);
            });
        }
    }

    deleteAds(id: string) {
        this.dataSource.deleteAds(id).subscribe(response => {
            if (response.success) {
                this.ads.splice(this.ads
                    .findIndex(item => item._id == id), 1)
            } else {
                alert(response.message);
            }
        });       
    }

}