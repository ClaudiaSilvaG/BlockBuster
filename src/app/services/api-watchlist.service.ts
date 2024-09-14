import { Injectable } from '@angular/core';
import {Peliculas} from "../models/peliculas";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiWatchlistService {

  constructor() { }

  //Obtiene la lista de peliculas de la watchlist
  getWatchlist():Observable<Peliculas[]>{
    return new Observable<Peliculas[]>((resolve) => {
      let watchlist =localStorage.getItem('watchlist')??"";
      if(watchlist ==""){
        resolve.next([]);
        return;
      }
      resolve.next(JSON.parse(watchlist));
    });
  }

  //Agrega una pelicula a la watchlist
  addWatchlist(Pelicula:Peliculas):Observable<boolean>{
    return new Observable((resolve) => {
      //Obtiene la lista de peliculas de la watchlist
      this.getWatchlist().subscribe((watchlist:Peliculas[])=>{
        //Verifica si la pelicula ya esta en la watchlist
        let index = watchlist.filter(x=>x.Id==Pelicula.Id);
        if(index.length==0) {
          //Agrega la pelicula a la watchlist
          watchlist.push(Pelicula);
          localStorage.setItem('watchlist', JSON.stringify(watchlist));
          resolve.next(true);
          resolve.complete();
        }
        else{
          resolve.next(false);
          resolve.complete();
        }
      });
    });
  }
  isWatchlist(Pelicula:Peliculas):Observable<boolean>{
    return new Observable((resolve) => {
      //Obtiene la lista de peliculas de la watchlist
      this.getWatchlist().subscribe((watchlist:Peliculas[])=>{
        //Verifica si la pelicula ya esta en la watchlist
        let index = watchlist.filter(x=>x.Id==Pelicula.Id);
        if(index.length==0) {
          resolve.next(false);
          resolve.complete();
        }
        else{
          resolve.next(true);
          resolve.complete();
        }
      });
    });
  }

  //Elimina una pelicula de la watchlist
  removeWatchlist(Pelicula:Peliculas):Observable<boolean>{
    return new Observable((resolve) => {
      //Obtiene la lista de peliculas de la watchlist
      this.getWatchlist().subscribe((watchlist:Peliculas[])=>{
        //Verifica si la pelicula ya esta en la watchlist
        let index = watchlist.findIndex(x=>x.Id==Pelicula.Id);
        if(index>=0) {
          //Elimina la pelicula de la watchlist
          watchlist.splice(index,1);
          localStorage.setItem('watchlist', JSON.stringify(watchlist));
          resolve.next(true);
          resolve.complete();
        }
        else{
          resolve.next(false);
          resolve.complete();
        }
      });
    });
  }
}
