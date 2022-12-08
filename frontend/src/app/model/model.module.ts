import { NgModule } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AdsRepository } from "./ads.repository";


@NgModule({
    imports: [HttpClientModule],
    providers: [
        AdsRepository, 
        RestDataSource
    ]
})

export class ModelModule { }