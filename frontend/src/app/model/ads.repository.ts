import { Injectable } from "@angular/core";
import { Ads } from "./ads.model";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class AdsRepository {
    private ads: Ads[] = [];
    public listReady: boolean = false;

    constructor(private dataSource: RestDataSource) {
        // dataSource.getAdsList().subscribe(data => {
        //     this.ads = data;
        // });
    }

    getAds(): Ads[] {
        return this.ads;
    }

    setAds(){
        this.listReady = false;
        this.dataSource.getAdsList().subscribe(data => {
            this.ads = data;
            this.listReady = true;
        });
    }

    getItem(id: string): Ads {
        return Object.assign({}, this.ads.find(i => i._id === id)!);        
    }

    async saveAds(item: Ads) {

        // If it does not have id, then create a new item.
        if (item._id == null || item._id == "") {
            this.dataSource.insertAds(item)
                .subscribe(response => {
                    if(response._id) // If API created
                    {
                        this.ads.push(response);
                    }
                    else{ // If API send error.
                        // Convert into ResponseModel to get the error message.
                        let error = response as ResponseModel;  
                        alert(`Error: ${error.message}`);
                    }
                });
        } else {
            // If it has id, then update a existing item.
            this.dataSource.updateAds(item).subscribe(resp => {

                // Convert into ResponseModel to get the error message.
                let response = resp as ResponseModel;
                if (response.success == true) {
                    console.log(`Sucess: ${response.success}`);
                    this.ads.splice(this.ads.
                        findIndex(i => i._id == item._id), 1, item);
                }
                else{
                    // If API send error.
                    alert(`Error: ${response.message}`);
                }        
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