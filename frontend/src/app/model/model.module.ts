import { NgModule } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AdsRepository } from "./ads.repository";
import { AuthService } from "./auth.service";


@NgModule({
    imports: [HttpClientModule],
    providers: [
        AdsRepository, 
        RestDataSource,
        AuthService
    ]
})

export class ModelModule { }