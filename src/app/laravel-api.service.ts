import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
export class  Utilisateur{
 public name: string ="";
  public id:number =0;
  public delay:number =0;
  public message:string = "";
  constructor(json? :any) {
    this.name = json.name;
    this.id = json.id;
    this.delay = json.delay;
    this.message = json.message;


  }
  getMessage():string{
    return '${this.name}: ${this.message}';

  }


}
interface  ApiRequest{
  user:string;
  delay:number;
}
@Injectable({
  providedIn: 'root'
})
export class LaravelApiService {


  private _reponses = new BehaviorSubject<Utilisateur[]>([]);
  private dataStore: { utilisateur: Utilisateur[] } = {utilisateur: []};
  readonly appels_termines = this._reponses.asObservable();

  constructor(private http: HttpClient) {
  }

  envoieRequete(pUser: string, pDelay: number) {
    const requestObject: ApiRequest = {"user": pUser, "delay": pDelay};
    return this.http.post<Utilisateur>('http://gsb.schaffter.etu.lmdsio.fr/api/test_api', requestObject).subscribe(
      data => {
        this.dataStore.utilisateur.push(data);
        this._reponses.next(this.dataStore.utilisateur);
      },
      error => console.log('Erreur appel API')
    );
  }

}



