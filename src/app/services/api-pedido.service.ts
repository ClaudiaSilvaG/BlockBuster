import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Peliculas} from "../models/peliculas";

@Injectable({
  providedIn: 'root'
})
export class ApiPedidoService {

  constructor() { }

  //Obtiene la lista de peliculas de la watchlist
  getPedido():Observable<Peliculas[]>{
    return new Observable<Peliculas[]>((resolve) => {
      let pedido =localStorage.getItem('pedido')??"";

      if(!pedido){
        resolve.next([]);
        return;
      }
      resolve.next(JSON.parse(pedido));
    });
  }

  //Agrega una pelicula a la watchlist
  addToPedido(Pelicula:Peliculas):Observable<boolean>{
    return new Observable((resolve) => {
      //Obtiene la lista de peliculas de la watchlist
      this.getPedido().subscribe((pedido:Peliculas[])=>{
        //Verifica si la pelicula ya esta en la watchlist
        let index = pedido.filter(x=>x.Id==Pelicula.Id);
        if(index.length==0) {
          //Agrega la pelicula a la watchlist
          pedido.push(Pelicula);
          localStorage.setItem('pedido', JSON.stringify(pedido));
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
  isInPedido(Pelicula:Peliculas):Observable<boolean>{
    return new Observable((resolve) => {
      //Obtiene la lista de peliculas de la watchlist
      this.getPedido().subscribe((watchlist:Peliculas[])=>{
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
  removePedido(Pelicula:Peliculas):Observable<boolean>{
    return new Observable((resolve) => {
      //Obtiene la lista de peliculas de la watchlist
      this.getPedido().subscribe((watchlist:Peliculas[])=>{
        //Verifica si la pelicula ya esta en la watchlist
        let index = watchlist.findIndex(x=>x.Id==Pelicula.Id);
        if(index>=0) {
          //Elimina la pelicula de la watchlist
          watchlist.splice(index,1);
          localStorage.setItem('pedido', JSON.stringify(watchlist));
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
