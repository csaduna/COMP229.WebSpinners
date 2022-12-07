import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Ads } from "./ads.model";
import { ResponseModel } from "./response.model";
import { User } from "./user.model";

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_tokens: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getAdsList(): Observable<Ads[]> {
        return this.http.get<Ads[]>(this.baseUrl + "ads/list");
    }

    insertAds(item: Ads): Observable<Ads> {
        return this.http.post<Ads>(this.baseUrl + "ads/add", 
            item, this.getOptions());
    }

    updateAds(item: Ads): Observable<Ads> {
        return this.http.put<Ads>(this.baseUrl + "ads/edit/${id}", 
            item, this.getOptions());
    }
    
    deleteAds(id: string): Observable<ResponseModel> {
        return this.http.delete<any>(this.baseUrl + "ads/delete/${id}", 
            this.getOptions()).pipe(map(response => {
                return response;
            }));
    }

    authentication(username: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "users/login", {
            username:username, password: pass
        }).pipe(map(response => {
                this.auth_tokens = response.success ? response.token : null;
                return response.success;
            }));
    }

    signupUser(user: User): Observable<ResponseModel> {
        return this.http.post<any>(this.baseUrl + "users/register", user)
        .pipe(map(response => {
                return response.success;
            }));
    }

    private getOptions(){
        return{
            headers: new HttpHeaders({
                "Authorization": 'Bearer ${this.auth_token}'
            })
        }
    }
}