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
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}`;
        //  this.baseUrl = 'https://webspinners.herokuapp.com/'
    }

    getAdsList(): Observable<Ads[]> {
        return this.http.get<Ads[]>(this.baseUrl + 'ads/list', this.getOptions());
    }

    insertAds(item: Ads): Observable<Ads> {
        return this.http.post<Ads>(this.baseUrl + 'ads/add', 
            item, this.getOptions());
    }

    updateAds(item: Ads): Observable<Ads> {
        return this.http.put<Ads>(this.baseUrl + `ads/edit/${item._id}`, 
            item, this.getOptions());
    }
    
    deleteAds(id: string): Observable<ResponseModel> {
        return this.http.delete<any>(this.baseUrl + `ads/delete/${id}`, 
            this.getOptions()).pipe(map(response => {
                return response;
            }));
    }

    authenticate(username: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "/users/login", {
            username:username, password: pass
        }).pipe(map(response => {
                this.auth_token = response.success ? response.token : null;
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
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        }
    }
}
