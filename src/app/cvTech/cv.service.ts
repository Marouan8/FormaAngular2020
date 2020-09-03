import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CvService {
  link = 'http://localhost:3000/api/personnes';
  private personnes : Personne[];
  constructor(private http : HttpClient) { 
    this.personnes = [
      new Personne(1,'ronaldo','cristiano',26,'cr.jpg',1111,'player'),
      new Personne(2,'messi','lionel',32,'lm.jpg',222,'player')
    ];
  }
  getPersonnes(): Observable<Personne[]>{
    return this.http.get<Personne[]>(this.link);
  }

  getFakePersonnes() {
    return this.personnes;
  }

  getPersonneById(id:number) : Observable<Personne> {
    return this.http.get<Personne>(this.link + `/${id}`);
  }
  addPersonne(personne: Personne): Observable<any>{
    // const token = localStorage.getItem('token');
    // if(token) {
    //   const params = new HttpParams().set('access_token',token);
    //   return this.http.post(this.link, personne, {params});
    // }
    return this.http.post(this.link, personne);
  }
  deletePersonne(id:number) {
    return this.http.delete(this.link + `/${id}`);
  }
  updatePersonne(personne: Personne) {
    console.log(personne);
   return this.http.put(this.link,personne);
  }
  findByName(name) :  Observable<Personne[]> {
    const filter = `{"where": {"name": {"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter',filter);
    return this.http.get<Personne[]>(this.link, {params});
  }
}
